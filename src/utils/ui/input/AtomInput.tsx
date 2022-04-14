import {
  createTheme,
  FormControl,
  InputLabel,
  TextField,
  ThemeProvider,
} from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import React from "react";

type Props = {
  errors?: string;
  icon: boolean;
  iconElement?: React.ReactNode;
  maxLength?: number;
  autoCapitalize?: "none" | undefined;
  onChange: any;
  onBlur?: any;
  placeholder: string;
  touched?: boolean;
  label: string;
  type?: string;
  value: string;
  width: string;
  disabled ?: boolean;
};

function AtomInput(props: Props) {
  const theme = createTheme({
    palette: {
      primary: blueGrey,
    },
  });
  return (
    <>
      <FormControl style={{ marginTop: "0px", textAlign: "start", paddingBottom: 20 }}>
        <ThemeProvider theme={theme}>
          <TextField
            style={{ fontSize: "16px" }}
            type={props.type === "password" ? "password" : "text"}
            color="primary"
            maxRows='none'
            autoCapitalize="none"
            onChange={props.onChange}
            onBlur={props.onBlur}
            variant="standard"
            value={props.value}
            label={props.label}
            error={props.errors && props.touched ? true : false}
            disabled={props.disabled}
          />
          {props.errors && props.touched && (
            <p className="pb-0 mb-0" style={{ color: "red", float: "left", paddingBottom: 2 }}>{props.errors}</p>
          )}
          {(!props.errors || !props.touched) && (
            <p className="pb-0 mb-0" style={{ color: "transparent", float: "left", paddingBottom: 2 }}>_</p>
          )}
        </ThemeProvider>
      </FormControl>
    </>
  );
}

export { AtomInput };
