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
  rows: number;
  multiline?: boolean;
};

function AtomTextInput(props: Props) {
  const theme = createTheme({
    palette: {
      primary: blueGrey,
    },
  });
  return (
    <>
      <FormControl style={{ marginTop: "0px", marginBottom: "0px", textAlign: "start", paddingBottom: 0,}}>
        <ThemeProvider theme={theme}>
          <TextField
            style={{ fontSize: "16px" }}
            type={props.type === "password" ? "password" : "text"}
            color="primary"
            rows={props.rows}
            multiline
            autoCapitalize="none"
            onChange={props.onChange}
            onBlur={props.onBlur}
            value={props.value}
            label={props.label}
            error={props.errors && props.touched ? true : false}
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

export { AtomTextInput };
