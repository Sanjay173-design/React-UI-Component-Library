import React, { useState } from "react";
import Select from "./Select";

export default {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    multiple: { control: "boolean" },
  },
};

const Template = (args) => {
  const [value, setValue] = useState(args.multiple ? [] : "");

  return (
    <div className="max-w-sm">
      <Select {...args} value={value} onChange={(val) => setValue(val)} />
      <p className="mt-3 text-sm text-gray-600">
        <strong>Selected:</strong>{" "}
        {Array.isArray(value) ? value.join(", ") : value}
      </p>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Select Option",
  options: [
    { label: "Option 1", value: "opt1" },
    { label: "Option 2", value: "opt2" },
    { label: "Option 3", value: "opt3" },
  ],
  multiple: false,
};

export const MultipleSelect = Template.bind({});
MultipleSelect.args = {
  label: "Select Multiple Options",
  multiple: true,
  options: [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Cherry", value: "cherry" },
    { label: "Mango", value: "mango" },
  ],
};
