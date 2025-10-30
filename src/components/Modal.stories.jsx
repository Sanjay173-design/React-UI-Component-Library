import React, { useState } from "react";
import Modal from "./Modal";
import Button from "./Button";

export default {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    children: { control: "text" },
  },
};

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>

      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {args.children}
      </Modal>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: "Example Modal",
  children:
    "This is a sample modal content. You can add text, buttons, or forms here.",
};

export const WithCustomContent = Template.bind({});
WithCustomContent.args = {
  title: "Custom Modal",
  children: (
    <div>
      <p className="mb-4">
        This modal contains custom content, including text and buttons.
      </p>
      <Button variant="danger">Delete</Button>
    </div>
  ),
};
