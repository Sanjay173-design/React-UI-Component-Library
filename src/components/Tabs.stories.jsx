import React, { useState } from "react";
import Tabs from "./Tabs";

export default {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {
    className: { control: "text" },
  },
};

const Template = (args) => {
  const [activeKey, setActiveKey] = useState(args.activeKey);

  return (
    <div className="max-w-md bg-gray-50 p-4 rounded-lg shadow-sm">
      <Tabs {...args} activeKey={activeKey} onTabChange={setActiveKey} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  activeKey: "tab1",
  tabs: [
    {
      key: "tab1",
      label: "Overview",
      content: (
        <p className="text-gray-700">This is the overview tab content.</p>
      ),
    },
    {
      key: "tab2",
      label: "Details",
      content: <p className="text-gray-700">Here are more detailed tab.</p>,
    },
    {
      key: "tab3",
      label: "Settings",
      content: <p className="text-gray-700">Change your setting here.</p>,
    },
  ],
};
