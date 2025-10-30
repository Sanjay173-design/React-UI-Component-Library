import React, { useState } from "react";
import Checkbox from "./Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    className: { control: "text" },
  },
};

const Template = (args) => {
  const [checked, setChecked] = useState(args.checked || false);
  return (
    <Checkbox
      {...args}
      checked={checked}
      onChange={() => setChecked(!checked)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Accept Terms & Conditions",
  checked: false,
};

export const Checked = Template.bind({});
Checked.args = {
  label: "I agree to subscribe",
  checked: true,
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  label: "Custom Indigo Background",
  checked: false,
  className: "bg-indigo-50 p-2 rounded-lg",
};
