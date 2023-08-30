import React from "react";
import { SCDatePicker } from "../../styledComponents/inputs/SCDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import NativeTextField from "./NativeTextField";
import NativeFormHelperText from "./NativeFormHelperText";
import { UtilityClasses } from "@wrappid/styles";
import moment from "moment";

export default function NativeDateRangepicker(props) {
  const { id, label, onChange, value, formik } = props;
  var spValue = {
    startDate:
      value && value.startDate
        ? typeof value.startDate === "string" && value.startDate.includes(":")
          ? moment(value.startDate)
          : value.startDate
        : "",
    endDate:
      value && value.endDate
        ? typeof value.endDate === "string" && value.endDate.includes(":")
          ? moment(value.endDate)
          : value.endDate
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
        onChange={(v) => {
          formik.setFieldValue(props.id, {
            ...value,
            startDate: moment(v).format("YYYY-MM-DD"),
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
            InputLabelProps={{...params.InputLabelProps, shrink: true }} 
            fullWidth={true}
          />
        )}
      />
      <SCDatePicker
        label={label}
        inputFormat="DD/MM/YYYY"
        value={spValue?.endDate}
        onChange={(v) => {
          formik.setFieldValue(props.id, {
            ...value,
            endDate: moment(v).format("YYYY-MM-DD"),
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
