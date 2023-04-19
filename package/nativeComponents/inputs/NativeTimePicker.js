import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import NativeTextField from "./NativeTextField";
import NativeFormHelperText from "./NativeFormHelperText";
import { CoreClasses } from "@wrappid/styles";
import { SCTimePicker } from "../../inputs/SCTimePicker";
import moment from "moment";

export default function NativeTimePicker(props) {
  const { label, onChange, value, formik, ampm } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <SCTimePicker
        id={props.id}
        name={props.id}
        label={label}
        inputFormat={ampm ? "hh:mm" : "HH:mm"}
        ampm={ampm}
        value={
          value
            ? typeof value === "string" && value.includes(":")
              ? moment().set({
                  hour: value.split(":")[0],
                  minute: value.split(":")[1],
                })
              : value
            : null
        }
        onChange={(v) => {
          console.log("V", v);
          if (formik) {
            formik.setFieldValue(props.id, v.format(ampm ? "hh:mm" : "HH:mm"));
          } else if (onChange) {
            onChange(v);
          }
        }}
        error={
          props.touched && props.error && props.error.length > 0 ? true : false
        }
        renderInput={(params) => (
          <NativeTextField
            helperText={
              props.touched && props.error && props.error.length > 0
                ? props.error
                : ""
            }
            {...params}
          />
        )}
      />
      <NativeFormHelperText styleClasses={[CoreClasses.LAYOUT.NO_MARGIN_P]}>
        {props.helperText}
      </NativeFormHelperText>
    </LocalizationProvider>
  );
}
