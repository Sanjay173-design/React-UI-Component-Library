import React, { useMemo } from "react";
import { BASE_STYLE, BORDER_RADIUS, RING_STYLE } from "../lib/constants";

const Button = ({
  children,
  onClick,
  variant = "primary",
  disabled = false,
  className = "",
}) => {
  const baseClasses = `px-5 py-2 ${BASE_STYLE} shadow-md ${BORDER_RADIUS} whitespace-nowrap`;

  const variantClasses = useMemo(() => {
    switch (variant) {
      case "secondary":
        return `bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-50 disabled:bg-gray-100 disabled:text-gray-400 ${RING_STYLE}`;
      case "danger":
        return `bg-red-600 text-white hover:bg-red-700 disabled:bg-red-300 ${RING_STYLE}`;
      case "ghost":
        return `bg-transparent text-indigo-600 hover:bg-gray-100 disabled:text-gray-400 disabled:hover:bg-transparent shadow-none ${RING_STYLE}`;
      case "primary":
      default:
        return `bg-indigo-600 text-white hover:bg-indigo-700 disabled:bg-indigo-300 ${RING_STYLE}`;
    }
  }, [variant]);

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses} ${
        disabled ? "cursor-not-allowed opacity-75" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
