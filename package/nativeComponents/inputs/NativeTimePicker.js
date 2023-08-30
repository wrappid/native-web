import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import NativeTextField from "./NativeTextField";
import NativeFormHelperText from "./NativeFormHelperText";
import { UtilityClasses } from "@wrappid/styles";
import { SCTimePicker } from "../../styledComponents/inputs/SCTimePicker";
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
        fullWidth={true}
        renderInput={(params) => (
          <NativeTextField
            helperText={
              props.touched && props.error && props.error.length > 0
                ? props.error
                : ""
            }
            {...params}
            InputLabelProps={{...params.InputLabelProps, shrink: true }} 
            fullWidth={true}
          />
        )}
      />
      <NativeFormHelperText styleClasses={[UtilityClasses.MARGIN.MT_N2]}>
        {props.helperText}
      </NativeFormHelperText>
    </LocalizationProvider>
  );
}
