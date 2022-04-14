import {
  createTheme,
  FormControl,
  InputLabel,
  TextField,
  ThemeProvider,
} from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import React from "react";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

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
  value: string;
  width: string;
  disabled?: boolean;
};

function AtomDateInput(props: Props) {
  const theme = createTheme({
    palette: {
      primary: blueGrey,
    },
  });
  return (
    <>
      <FormControl style={{ marginTop: "0px", textAlign: "start", paddingBottom: 20 }}>
        <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              onChange={props.onChange}
              value={props.value}
              label={props.label}
              disabled={props.disabled}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
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

export { AtomDateInput };
