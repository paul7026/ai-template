import { Button } from "@/shared/ui/Button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Menu as MenuMui, MenuItem as MenuItemMui } from "@mui/material";
import { MenuProps } from "../model/types";

export const Menu = ({
  name,
  list,
  anchorEl,
  onClick,
  onClose,
  ...rest
}: MenuProps) => {
  const open = Boolean(anchorEl);

  return (
    <div>
      <Button
        id="menu-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={onClick}
        endIcon={<ArrowDropDownIcon />}
      >
        {name}
      </Button>
      <MenuMui
        {...rest}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={onClose}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button",
          },
        }}
      >
        {list.map((item) => (
          <MenuItemMui key={item.id} onClick={item.onClick}>
            {item.name}
          </MenuItemMui>
        ))}
      </MenuMui>
    </div>
  );
};
