import React from "react";
import { BASE_STYLE } from "../lib/constants";

const Tabs = ({ tabs, activeKey, onTabChange, className = "" }) => {
  const activeTab = tabs.find((tab) => tab.key === activeKey);

  return (
    <div className={className}>
      <div className="flex border-b border-gray-200 overflow-x-auto whitespace-nowrap">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => onTabChange(tab.key)}
            className={`
              px-4 py-2 -mb-px text-sm font-medium border-b-2
              ${BASE_STYLE}
              ${
                tab.key === activeKey
                  ? `text-indigo-600 border-indigo-600`
                  : "text-gray-500 border-transparent hover:border-gray-300 hover:text-gray-700"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4 bg-white rounded-b-lg">
        {activeTab ? (
          activeTab.content
        ) : (
          <p className="text-gray-500">No content for this tab.</p>
        )}
      </div>
    </div>
  );
};

export default Tabs;
