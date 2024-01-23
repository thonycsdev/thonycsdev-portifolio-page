import React from "react";
type TabButtonProps = {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
};
function TabButton({ active, children, selectTab }: TabButtonProps) {
  const buttonClasses = active
    ? "text-white border-b border-emerald-500"
    : "text-[#ADB7BE] hover:text-white";
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
}

export default TabButton;
