import React, { useState } from "react";

function SwitchButton() {
  const [isChecked, setIsChecked] = useState(false);
  function onClickCheckbox() {
    setIsChecked((old) => !old);
  }
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        checked={isChecked}
        onChange={onClickCheckbox}
      />
      <div className="w-11 h-6 bg-emerald-700 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-emerald-500 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-emerald-400"></div>
      <span className="ms-3 text-sm font-medium text-white dark:text-gray-300">
        en_US
      </span>
    </label>
  );
}

export default SwitchButton;
