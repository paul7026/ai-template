import { Box } from "@/shared/ui/Box";
import { Link } from "@/shared/ui/Link";
import { NavMenuProps } from "../model/types";

export const NavMenu = ({ list, ...rest }: NavMenuProps) => {
  return (
    <Box component="nav" sx={{ display: "flex", gap: 1 }} {...rest}>
      {list.map((item) => (
        <Link key={item.id} href={item.href} underline="hover" color="primary">
          {item.name}
        </Link>
      ))}
    </Box>
  );
};
