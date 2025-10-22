import type { Meta, StoryObj } from "@storybook/nextjs";

import { fn } from "storybook/test";

import { NavMenu } from "./NavMenu";

const meta = {
  title: "mui/NavMenu",
  component: NavMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof NavMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "primary",
    list: [
      { id: "0", name: "Link1", href: "/" },
      { id: "1", name: "Link2", href: "/about" },
      { id: "2", name: "Link3", href: "/services" },
    ],
  },
};
