"use client";

import { useEffect, useRef } from "react";
import styles from "./ScrollMarquee.module.css";

type ScrollMarqueeProps = {
  children: React.ReactNode;
  className?: string;
  durationSeconds?: number;
  resumeDelayMs?: number;
};

// Like Marquee, but built on native horizontal scroll so users can take over with
// wheel/trackpad, mouse drag or touch. Auto-scroll pauses while they interact.
export function ScrollMarquee({ children, className = "", durationSeconds = 40, resumeDelayMs = 2500 }: ScrollMarqueeProps) {
  const viewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const loopWidth = () => el.scrollWidth / 2;

    // scrollLeft may be rounded to whole pixels, so the sub-pixel position is tracked here.
    let position = el.scrollLeft;
    let paused = false;
    let hovering = false;
    let touching = false;
    let drag: { startX: number; startScroll: number; moved: boolean } | null = null;
    let resumeTimer: number | undefined;
    let frame = 0;
    let lastTime = 0;

    const wrap = (value: number) => {
      const width = loopWidth();
      return width > 0 ? ((value % width) + width) % width : value;
    };

    const pause = () => {
      paused = true;
      window.clearTimeout(resumeTimer);
    };

    const scheduleResume = () => {
      window.clearTimeout(resumeTimer);
      resumeTimer = window.setTimeout(() => {
        if (hovering || touching || drag) return;
        position = el.scrollLeft;
        paused = false;
      }, resumeDelayMs);
    };

    const tick = (time: number) => {
      const elapsed = lastTime ? (time - lastTime) / 1000 : 0;
      lastTime = time;
      if (!paused) {
        position = wrap(position + (loopWidth() / durationSeconds) * elapsed);
        el.scrollLeft = position;
      }
      frame = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      if (!paused) return;
      const width = loopWidth();
      if (el.scrollLeft >= width) el.scrollLeft -= width;
      else if (el.scrollLeft <= 0) el.scrollLeft += width;
    };

    const onPointerEnter = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      hovering = true;
      pause();
    };

    const onPointerLeave = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      hovering = false;
      scheduleResume();
    };

    const onPointerDown = (event: PointerEvent) => {
      pause();
      if (event.pointerType !== "mouse" || event.button !== 0) return;
      drag = { startX: event.clientX, startScroll: el.scrollLeft, moved: false };
      el.setPointerCapture(event.pointerId);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!drag) return;
      const dx = event.clientX - drag.startX;
      if (Math.abs(dx) > 3) {
        drag.moved = true;
        el.classList.add(styles.dragging);
      }
      el.scrollLeft = wrap(drag.startScroll - dx);
    };

    const onPointerUp = (event: PointerEvent) => {
      if (drag) {
        if (drag.moved) el.addEventListener("click", (e) => e.preventDefault(), { capture: true, once: true });
        drag = null;
        el.classList.remove(styles.dragging);
        if (el.hasPointerCapture(event.pointerId)) el.releasePointerCapture(event.pointerId);
      }
      if (event.pointerType === "mouse") scheduleResume();
    };

    // Touch scrolling is native; only the pause/resume needs wiring.
    const onTouchStart = () => {
      touching = true;
      pause();
    };
    const onTouchEnd = () => {
      touching = false;
      scheduleResume();
    };

    const onWheel = () => {
      pause();
      if (!hovering) scheduleResume();
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    el.addEventListener("pointerenter", onPointerEnter);
    el.addEventListener("pointerleave", onPointerLeave);
    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", onPointerUp);
    el.addEventListener("pointercancel", onPointerUp);
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    el.addEventListener("touchcancel", onTouchEnd, { passive: true });
    el.addEventListener("wheel", onWheel, { passive: true });

    if (reducedMotion) paused = true;
    else frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(resumeTimer);
      el.removeEventListener("scroll", onScroll);
      el.removeEventListener("pointerenter", onPointerEnter);
      el.removeEventListener("pointerleave", onPointerLeave);
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", onPointerUp);
      el.removeEventListener("pointercancel", onPointerUp);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
      el.removeEventListener("touchcancel", onTouchEnd);
      el.removeEventListener("wheel", onWheel);
    };
  }, [durationSeconds, resumeDelayMs]);

  return (
    <div ref={viewportRef} className={`${styles.viewport} ${className}`}>
      <div className={styles.track}>
        <div className={styles.group}>{children}</div>
        <div className={styles.group} aria-hidden>{children}</div>
      </div>
    </div>
  );
}
