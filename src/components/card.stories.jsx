import Card from "./Card";

export default {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    children: { control: "text" },
    className: { control: "text" },
  },
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Card Title",
  children: "This is a simple card with shadow and border.",
};

export const NoTitle = Template.bind({});
NoTitle.args = {
  children: "This card has no title, just body content.",
};

export const CustomClass = Template.bind({});
CustomClass.args = {
  title: "Custom Styled Card",
  children: "This card has extra padding and border.",
  className: "border-indigo-300 bg-indigo-50",
};
