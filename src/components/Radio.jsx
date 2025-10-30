import React, { useMemo } from "react";
import { BASE_STYLE } from "../lib/constants";

const Radio = ({ label, name, value, checked, onChange, className = "" }) => {
  const radioId = useMemo(
    () => `radio-${Math.random().toString(36).substring(2, 9)}`,
    []
  );

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <input
        id={radioId}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="hidden"
      />
      <label
        htmlFor={radioId}
        className="flex items-center cursor-pointer select-none"
      >
        <div
          className={`w-5 h-5 flex items-center justify-center rounded-full border-2 ${BASE_STYLE} ${
            checked ? `border-indigo-600 p-[3px]` : "border-gray-400 p-0"
          }`}
        >
          {checked && (
            <div className={`w-full h-full rounded-full bg-indigo-600`} />
          )}
        </div>
        <span className="ml-2 text-sm text-gray-700">{label}</span>
      </label>
    </div>
  );
};

export default Radio;
