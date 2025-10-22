import {
  MenuItem,
  MenuItemProps,
  MenuProps as MenuPropsMui,
} from "@mui/material";

export type MenuItem = {
  name: string;
} & MenuItemProps;

export type MenuList = MenuItem[];

export interface MenuProps extends Omit<MenuPropsMui, "onClick" | "open"> {
  name: string;
  list: MenuList;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
