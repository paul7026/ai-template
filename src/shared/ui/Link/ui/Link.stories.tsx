import type { Meta, StoryObj } from "@storybook/nextjs";
import { fn } from "storybook/test";

import { Link } from "./Link";
import { Box } from "../../Box/ui/Box";

const meta = {
  title: "mui/Link",
  component: Link,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: "#",
    children: "Link",
  },
};

export const LinksMenuDefault: Story = {
  render: (args) => (
    <Box sx={{ display: "flex", gap: 2 }}>
      <Link {...args} href="#1">
        Link 1
      </Link>
      <Link {...args} href="#">
        Link 2
      </Link>
      <Link {...args} href="#">
        Link 3
      </Link>
    </Box>
  ),
};

export const LinksMenuUnderlineHover: Story = {
  render: (args) => (
    <Box sx={{ display: "flex", gap: 2 }}>
      <Link {...args} href="#" underline="hover">
        Link 1
      </Link>
      <Link {...args} href="#" underline="hover">
        Link 2
      </Link>
      <Link {...args} href="#" underline="hover">
        Link 3
      </Link>
    </Box>
  ),
};
