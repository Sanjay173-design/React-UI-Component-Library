import React, { useMemo } from "react";
import { ChevronDown } from "lucide-react";
import { BASE_STYLE, BORDER_RADIUS, RING_STYLE } from "../lib/constants";

const Select = ({
  label,
  options,
  value,
  onChange,
  multiple = false,
  className = "",
}) => {
  const selectId = useMemo(
    () => `select-${Math.random().toString(36).substring(2, 9)}`,
    []
  );

  const borderStyle = `border border-gray-300 ${RING_STYLE} ${BORDER_RADIUS}`;

  const handleChange = (e) => {
    if (multiple) {
      const selectedOptions = Array.from(
        e.target.selectedOptions,
        (option) => option.value
      );
      onChange(selectedOptions);
    } else {
      onChange(e.target.value);
    }
  };

  const selectValue = multiple
    ? Array.isArray(value)
      ? value
      : []
    : value || "";

  return (
    <div className={`flex flex-col space-y-1 ${className}`}>
      {label && (
        <label htmlFor={selectId} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={selectId}
          value={selectValue}
          onChange={handleChange}
          multiple={multiple}
          className={`w-full appearance-none px-4 py-2 text-gray-700 ${borderStyle} ${BASE_STYLE} pr-10 ${
            multiple ? "h-40" : ""
          }`}
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
        {!multiple && (
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
        )}
      </div>
    </div>
  );
};

export default Select;
