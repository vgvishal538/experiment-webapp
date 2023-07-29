import { Breadcrumbs } from ".";

export default {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  argTypes: {
    divider: {
      options: ["chevron", "slash"],
      control: { type: "select" },
    },
    type: {
      options: ["button-gray", "button-primary", "button-gray-with-border", "text-with-line", "text"],
      control: { type: "select" },
    },
    breakpoint: {
      options: ["desktop", "mobile"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    divider: "chevron",
    type: "button-gray",
    breakpoint: "desktop",
    className: {},
  },
};
