import { CheckboxProps as CheckboxPropsMui } from "@mui/material";

export type CheckboxProps = CheckboxPropsMui & {
  label?: string;
  labelPlacement?: "end" | "start" | "top" | "bottom";
};
