import { Grid as GridMui, GridProps } from "@mui/material";

export const Grid = ({ ...rest }: GridProps) => {
  return <GridMui {...rest} />;
};
