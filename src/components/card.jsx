import React from "react";
import { BORDER_RADIUS } from "../lib/constants";

const Card = ({ title, children, className = "" }) => {
  return (
    <div
      className={`bg-white p-6 ${BORDER_RADIUS} shadow-lg border border-gray-100 ${className}`}
    >
      {title && (
        <h4 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-3 border-gray-200">
          {title}
        </h4>
      )}
      <div>{children}</div>
    </div>
  );
};

export default Card;
