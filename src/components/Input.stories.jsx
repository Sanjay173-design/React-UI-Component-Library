import React, { useState } from "react";
import Input from "./Input";

export default {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    type: { control: "select", options: ["text", "number", "textarea"] },
    placeholder: { control: "text" },
    helperText: { control: "text" },
    className: { control: "text" },
  },
};

const Template = (args) => {
  const [value, setValue] = useState(args.value || "");
  return (
    <Input {...args} value={value} onChange={(e) => setValue(e.target.value)} />
  );
};

export const Text = Template.bind({});
Text.args = {
  label: "Name",
  placeholder: "Enter your name...",
  helperText: "This is a text input field.",
};

export const Number = Template.bind({});
Number.args = {
  label: "Age",
  type: "number",
  placeholder: "Enter your age...",
  helperText: "Only numbers allowed.",
};

export const TextArea = Template.bind({});
TextArea.args = {
  label: "Message",
  type: "textarea",
  placeholder: "Type your message here...",
  helperText: "You can enter multiple lines of text.",
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  label: "Custom Styled Input",
  placeholder: "Custom colors or spacing",
  helperText: "Styled with Tailwind classes.",
  className: "bg-indigo-50 p-2 rounded-xl",
};
