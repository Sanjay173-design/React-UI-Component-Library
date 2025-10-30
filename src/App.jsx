import React, { useState, useCallback } from "react";
import { RefreshCw, Check } from "lucide-react";

import Button from "./components/Button";
import Input from "./components/Input";
import Modal from "./components/Modal";
import Card from "./components/Card";
import Checkbox from "./components/Checkbox";
import Radio from "./components/Radio";
import Select from "./components/Select";
import Tabs from "./components/Tabs";

const options = [
  { label: "Option A", value: "a" },
  { label: "Option B (Disabled)", value: "b", disabled: true },
  { label: "Option C", value: "c" },
  { label: "Option D", value: "d" },
  { label: "Option E", value: "e" },
];

const App = () => {
  const [textValue, setTextValue] = useState("");
  const [numValue, setNumValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isChecked, setIsChecked] = useState(true);
  const [radioOption, setRadioOption] = useState("apple");

  const [singleSelectValue, setSingleSelectValue] = useState("c");
  const [multiSelectValues, setMultiSelectValues] = useState(["a", "d"]);

  const [activeTab, setActiveTab] = useState("profile");

  const [notificationMessage, setNotificationMessage] = useState(null);

  const handleButtonClick = (message) => {
    setNotificationMessage(message);
    setTimeout(() => setNotificationMessage(null), 2000);
  };

  const tabData = [
    {
      key: "profile",
      label: "Profile",
      content: <p className="text-gray-700">Manage user profile setting.</p>,
    },
    {
      key: "docs",
      label: "Documentation",
      content: (
        <p className="text-gray-700">Documentation and guides to be added.</p>
      ),
    },
  ];

  const handleMultiSelectChange = useCallback((values) => {
    setMultiSelectValues(values);
  }, []);

  return (
    <div className="min-h-screen bg-blue-50 p-6 sm:p-10 font-inter">
      <style>{`
        /* Note: In a Vite app with Tailwind, you would typically define 'Inter' in your tailwind.config.js */
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slideIn 0.3s ease-out forwards;
        }
      `}</style>

      {notificationMessage && (
        <div
          className={`fixed top-4 right-4 bg-indigo-600 text-white p-4 rounded-xl shadow-xl z-50 transition transform duration-300 animate-slide-in flex items-center`}
        >
          <Check className="w-5 h-5 inline mr-3" />
          <span className="font-medium">{notificationMessage}</span>
        </div>
      )}

      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        UI Component Library
      </h1>
      {/* --- Responsive Grid Layout --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* --- Card 1: Buttons --- */}
        <Card title="1. Button Variants">
          <div className="flex flex-wrap gap-3">
            <Button onClick={() => handleButtonClick("Primary clicked!")}>
              Primary
            </Button>
            <Button
              variant="secondary"
              onClick={() => handleButtonClick("Secondary clicked!")}
            >
              Secondary
            </Button>
            <Button
              variant="danger"
              onClick={() => handleButtonClick("Danger clicked!")}
            >
              Danger
            </Button>
            <Button
              variant="ghost"
              onClick={() => handleButtonClick("Ghost clicked!")}
            >
              Ghost
            </Button>
            <Button disabled>Disabled</Button>
            <Button
              variant="primary"
              onClick={() => handleButtonClick("Icon button clicked!")}
              className="flex items-center space-x-2"
            >
              <RefreshCw className="w-4 h-4" />
              <span>With Icon</span>
            </Button>
          </div>
        </Card>

        {/* --- Card 2: Inputs --- */}
        <Card title="2. Input Variants">
          <div className="space-y-4">
            <Input
              label="Text Input"
              placeholder="Enter text..."
              value={textValue}
              onChange={(e) => setTextValue(e.target.value)}
              helperText={`Current Value: ${textValue}`}
            />
            <Input
              label="Number Input"
              type="number"
              placeholder="Enter number..."
              value={numValue}
              onChange={(e) => setNumValue(e.target.value)}
            />
            <Input
              label="Textarea"
              type="textarea"
              placeholder="Enter multi-line text..."
              value={textareaValue}
              onChange={(e) => setTextareaValue(e.target.value)}
            />
          </div>
        </Card>

        {/* --- Card 3: Card and Modal --- */}
        <Card title="3. Modal Demonstration">
          <p className="mb-4 text-gray-600">
            Click the button below to see the Modal component.
          </p>
          <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="Modal"
          >
            <p>Model Done.</p>
          </Modal>
        </Card>

        {/* --- Card 4: Checkbox and Radio --- */}
        <Card title="4. Checkbox & Radio">
          <div className="space-y-4">
            <h5 className="text-lg font-medium text-gray-800">Checkboxes</h5>
            <Checkbox
              label="Enable"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            <Checkbox
              label="Disabled Checkbox"
              checked={false}
              onChange={() => {}}
              className="opacity-50 pointer-events-none"
            />

            <h5 className="text-lg font-medium text-gray-800 pt-3 border-t mt-4 border-gray-100">
              Radio Group (Selected: {radioOption})
            </h5>
            <div className="flex flex-col space-y-2">
              <Radio
                label="Apple"
                name="fruit"
                value="apple"
                checked={radioOption === "apple"}
                onChange={(e) => setRadioOption(e.target.value)}
              />
              <Radio
                label="Banana"
                name="fruit"
                value="banana"
                checked={radioOption === "banana"}
                onChange={(e) => setRadioOption(e.target.value)}
              />
              <Radio
                label="Cherry"
                name="fruit"
                value="cherry"
                checked={radioOption === "cherry"}
                onChange={(e) => setRadioOption(e.target.value)}
              />
            </div>
          </div>
        </Card>

        {/* --- Card 5: Selects --- */}
        <Card title="5. Single & Multiselect">
          <div className="space-y-4">
            <Select
              label="Single Select"
              options={options}
              value={singleSelectValue}
              onChange={setSingleSelectValue}
            />
            <p className="text-sm text-gray-600">
              Selected:{" "}
              <span className={`font-semibold text-indigo-600`}>
                {singleSelectValue}
              </span>
            </p>

            <Select
              label="Multiselect (CTRL)"
              options={options}
              value={multiSelectValues}
              onChange={handleMultiSelectChange}
              multiple
              className="pt-4 border-t border-gray-100"
            />
          </div>
        </Card>

        {/* --- Card 6: Tabs --- */}
        <Card title="6. Tabs Component" className="lg:col-span-1 p-0">
          <Tabs
            tabs={tabData}
            activeKey={activeTab}
            onTabChange={setActiveTab}
            className="w-full"
          />
        </Card>
      </div>
    </div>
  );
};

export default App;
