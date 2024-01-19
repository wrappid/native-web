// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
// eslint-disable-next-line import/no-unresolved
import { UtilityClasses } from "@wrappid/styles";
import moment from "moment";

import NativeFormHelperText from "./NativeFormHelperText";
import NativeTextField from "./NativeTextField";
import { SCDatePicker } from "../../styledComponents/inputs/SCDatePicker";

export default function NativeDateRangepicker(props) {
  const { /* id, onChange,  */label, value, formik } = props;
  let spValue = {
    endDate:
      value && value.endDate
        ? typeof value.endDate === "string" && value.endDate.includes(":")
          ? moment(value.endDate)
          : value.endDate
        : "",
    startDate:
      value && value.startDate
        ? typeof value.startDate === "string" && value.startDate.includes(":")
          ? moment(value.startDate)
          : value.startDate
        : "",
  };

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <SCDatePicker
        id={props.id}
        name={props.id}
        label={label}
        inputFormat="DD/MM/YYYY"
        value={spValue?.startDate}
        onChange={(value) => {
          formik.setFieldValue(props.id, {
            ...value,
            startDate: moment(value).format("YYYY-MM-DD"),
          });
        }}
        fullWidth={true}
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
            InputLabelProps={{ ...params.InputLabelProps, shrink: true }} 
            fullWidth={true}
          />
        )}
      />

      <SCDatePicker
        label={label}
        inputFormat="DD/MM/YYYY"
        value={spValue?.endDate}
        onChange={(value) => {
          formik.setFieldValue(props.id, {
            ...value,
            endDate: moment(value).format("YYYY-MM-DD"),
          });
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
            InputLabelProps={{ shrink: true }} 
            fullWidth={true}
          />
        )}
      />

      <NativeFormHelperText styleClasses={[UtilityClasses.LAYOUT.NO_MARGIN_P]}>
        {props.helperText}
      </NativeFormHelperText>
    </LocalizationProvider>
  );
}
