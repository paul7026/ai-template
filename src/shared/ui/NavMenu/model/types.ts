import { BoxProps, ListProps } from "@mui/material";

export type NavMenuItem = {
  name: string;
  href: string;
  id: string;
} & ListProps;

export type NavMenuList = NavMenuItem[];

export interface NavMenuProps extends BoxProps {
  list: NavMenuList;
}
