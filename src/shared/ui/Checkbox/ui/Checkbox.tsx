import { Checkbox as CheckboxMui, FormControlLabel } from "@mui/material";
import { CheckboxProps } from "../model/types";

export const Checkbox = ({ label, labelPlacement, ...rest }: CheckboxProps) => {
  return (
    <FormControlLabel
      control={<CheckboxMui {...rest} />}
      label={label}
      labelPlacement={labelPlacement}
    />
  );
};
