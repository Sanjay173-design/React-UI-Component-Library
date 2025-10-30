import React from "react";
import { X } from "lucide-react";
import Button from "./Button";
import { BORDER_RADIUS } from "../lib/constants";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-gray-900 bg-opacity-50 flex items-center justify-center p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className={`bg-white ${BORDER_RADIUS} shadow-2xl max-w-lg w-full transform transition-all p-6`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center pb-3 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <Button variant="ghost" onClick={onClose} className="p-1">
            <X className="w-5 h-5 text-gray-500" />
          </Button>
        </div>
        <div className="py-4 text-gray-600">{children}</div>
        <div className="pt-3 border-t border-gray-200 flex justify-end space-x-3">
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
