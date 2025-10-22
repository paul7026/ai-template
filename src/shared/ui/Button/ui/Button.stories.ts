import type { Meta, StoryObj } from "@storybook/nextjs";

import { fn } from "storybook/test";

import { Button } from "./Button";

const meta = {
  title: "mui/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Contained: Story = {
  args: {
    variant: "contained",
    children: "Contained",
  },
};

export const Text: Story = {
  args: {
    variant: "text",
    children: "Text",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    children: "Outlined",
  },
};
