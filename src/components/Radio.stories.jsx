import React, { useState } from "react";
import Radio from "./Radio";

export default {
  title: "Components/Radio",
  component: Radio,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    name: { control: "text" },
    value: { control: "text" },
    className: { control: "text" },
  },
};

const Template = (args) => {
  const [selected, setSelected] = useState(args.value || "option1");

  const handleChange = (e) => setSelected(e.target.value);

  return (
    <div className="space-y-2">
      <Radio
        {...args}
        label="Option 1"
        name="example"
        value="option1"
        checked={selected === "option1"}
        onChange={handleChange}
      />
      <Radio
        {...args}
        label="Option 2"
        name="example"
        value="option2"
        checked={selected === "option2"}
        onChange={handleChange}
      />
      <Radio
        {...args}
        label="Option 3"
        name="example"
        value="option3"
        checked={selected === "option3"}
        onChange={handleChange}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Example Radio Group",
  name: "example",
  value: "option1",
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  label: "Custom Radio Style",
  name: "custom",
  value: "option1",
  className: "bg-indigo-50 p-2 rounded-md",
};
