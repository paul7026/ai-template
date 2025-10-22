import {
  Typography as TypographyMui,
  TypographyProps as TypographyPropsMui,
} from "@mui/material";

interface TypographyProps extends TypographyPropsMui {}

export const Typography = ({ ...rest }: TypographyProps) => {
  return <TypographyMui {...rest} />;
};
