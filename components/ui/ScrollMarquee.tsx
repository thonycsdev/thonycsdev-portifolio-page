"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ScrollMarquee.module.css";

type ScrollMarqueeProps = {
  children: React.ReactNode;
  className?: string;
  durationSeconds?: number;
  resumeDelayMs?: number;
};

// Like Marquee, but built on native horizontal scroll so users can take over with
// wheel/trackpad, mouse drag or touch. Auto-scroll pauses while they interact.
// The content is repeated enough times that the scroll position never reaches an edge:
// whenever it gets within one loop of either side it jumps back by exactly one loop,
// which looks identical, so scrolling goes around forever in both directions.
export function ScrollMarquee({ children, className = "", durationSeconds = 40, resumeDelayMs = 2500 }: ScrollMarqueeProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);
  const [copies, setCopies] = useState(4);

  useEffect(() => {
    const el = viewportRef.current;
    const group = groupRef.current;
    if (!el || !group) return;
    // One loop of buffer on each side of the visible area, plus a spare one.
    const update = () => {
      if (group.offsetWidth > 0) setCopies(Math.ceil(el.clientWidth / group.offsetWidth) + 3);
    };
    const observer = new ResizeObserver(update);
    observer.observe(el);
    observer.observe(group);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const loopWidth = () => groupRef.current?.offsetWidth ?? 0;

    const normalize = (value: number) => {
      const width = loopWidth();
      if (width <= 0) return value;
      const max = el.scrollWidth - el.clientWidth;
      while (value < width) value += width;
      while (value > max - width && value - width >= width) value -= width;
      return value;
    };

    // Re-centre by whole loops (visually identical) so the next loop jump is a full loop
    // away in either direction. Runs again whenever the number of copies changes.
    if (loopWidth() > 0) {
      const middle = (el.scrollWidth - el.clientWidth) / 2;
      el.scrollLeft = normalize(el.scrollLeft + Math.round((middle - el.scrollLeft) / loopWidth()) * loopWidth());
    }
    // scrollLeft may be rounded to whole pixels, so the sub-pixel position is tracked here.
    let position = el.scrollLeft;
    let paused = false;
    let hovering = false;
    let touching = false;
    let drag: { startX: number; startScroll: number; moved: boolean } | null = null;
    let resumeTimer: number | undefined;
    let frame = 0;
    let lastTime = 0;

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
        position = normalize(position + (loopWidth() / durationSeconds) * elapsed);
        el.scrollLeft = position;
      }
      frame = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      if (!paused || drag) return;
      const next = normalize(el.scrollLeft);
      if (next !== el.scrollLeft) el.scrollLeft = next;
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
      const target = drag.startScroll - dx;
      const next = normalize(target);
      drag.startScroll += next - target;
      el.scrollLeft = next;
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
  }, [copies, durationSeconds, resumeDelayMs]);

  return (
    <div ref={viewportRef} className={`${styles.viewport} ${className}`}>
      <div className={styles.track}>
        {Array.from({ length: copies }, (_, i) => (
          <div key={i} ref={i === 0 ? groupRef : undefined} className={styles.group} aria-hidden={i > 0 || undefined}>
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}
