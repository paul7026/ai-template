import { TextField as TextFieldMui, TextFieldProps } from "@mui/material";

export const TextField = ({ ...rest }: TextFieldProps) => {
  return <TextFieldMui {...rest} />;
};
