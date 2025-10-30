import React, { useMemo } from "react";
import { Check } from "lucide-react";
import { BASE_STYLE } from "../lib/constants";

const Checkbox = ({ label, checked, onChange, className = "" }) => {
  const checkboxId = useMemo(
    () => `checkbox-${Math.random().toString(36).substring(2, 9)}`,
    []
  );

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <input
        id={checkboxId}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="hidden"
      />
      <label
        htmlFor={checkboxId}
        className="flex items-center cursor-pointer select-none"
      >
        <div
          className={`w-5 h-5 flex items-center justify-center rounded-md border-2 ${BASE_STYLE} ${
            checked
              ? `bg-indigo-600 border-indigo-600`
              : "bg-white border-gray-400"
          }`}
        >
          {checked && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
        </div>
        <span className="ml-2 text-sm text-gray-700">{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;
