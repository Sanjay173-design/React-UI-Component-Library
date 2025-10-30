import React, { useMemo } from "react";
import { BASE_STYLE, BORDER_RADIUS, RING_STYLE } from "../lib/constants";

const Input = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  className = "",
  helperText,
}) => {
  const borderStyle = `border border-gray-300 ${RING_STYLE} ${BORDER_RADIUS}`;

  const Component = type === "textarea" ? "textarea" : "input";

  const inputClasses = `w-full px-4 py-2 text-gray-700 ${borderStyle} ${BASE_STYLE} ${
    type === "textarea" ? "min-h-[100px]" : ""
  }`;

  const inputId = useMemo(
    () => `input-${Math.random().toString(36).substring(2, 9)}`,
    []
  );

  return (
    <div className={`flex flex-col space-y-1 ${className}`}>
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <Component
        id={inputId}
        type={type === "textarea" ? undefined : type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={inputClasses}
        {...(type === "number" && { inputMode: "numeric", pattern: "[0-9]*" })}
      />
      {helperText && <p className="text-xs text-gray-500">{helperText}</p>}
    </div>
  );
};

export default Input;
