import type { Meta, StoryObj } from "@storybook/nextjs";

import { fn } from "storybook/test";

import { Menu } from "./Menu";
import { useState } from "react";

const meta = {
  title: "mui/Menu",
  component: Menu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

const MenuWithState = (args: any) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Menu
      {...args}
      anchorEl={anchorEl}
      onClick={handleClick}
      onClose={handleClose}
    />
  );
};

export const Default: Story = {
  render: (args) => <MenuWithState {...args} />,
  args: {
    name: "Dashboard",
    list: [
      { id: "0", name: "Profile", value: "profile" },
      { id: "1", name: "My account", value: "myAccount" },
      { id: "2", name: "Logout", value: "logout" },
    ],
    anchorEl: null,
  },
};
