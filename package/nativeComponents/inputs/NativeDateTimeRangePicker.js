import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import NativeTextField from "./NativeTextField";
import NativeFormHelperText from "./NativeFormHelperText";
import { CoreClasses } from "@wrappid/styles";
import { SCDateTimePicker } from "../../inputs/SCDateTimePicker";
import moment from "moment";

export default function NativeDateTimeRangePicker(props) {
  const { label, onChange, value, formik } = props;
  var spValue = {
    startDate:
      value && value.startDate
        ? typeof value.startDate === "string"
          ? moment(value.startDate)
          : value.startDate
        : "",
    endDate:
      value && value.endDate
        ? typeof value.endDate === "string"
          ? moment(value.endDate)
          : value.endDate
        : "",
  };

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <SCDateTimePicker
        id={props.id}
        name={props.id}
        label={label}
        inputFormat="DD/MM/YYYY hh:mm"
        value={spValue?.startDate}
        onChange={(v) => {
          formik.setFieldValue(props.id, {
            ...value,
            startDate: moment(v).format("YYYY-MM-DD hh:mm"),
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
          />
        )}
      />
      <SCDateTimePicker
        id={props.id}
        name={props.id}
        label={label}
        inputFormat="DD/MM/YYYY hh:mm"
        value={spValue?.endDate}
        onChange={(v) => {
          formik.setFieldValue(props.id, {
            ...value,
            endDate: moment(v).format("YYYY-MM-DD hh:mm"),
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
          />
        )}
      />
      <NativeFormHelperText styleClasses={[CoreClasses.LAYOUT.NO_MARGIN_P]}>
        {props.helperText}
      </NativeFormHelperText>
    </LocalizationProvider>
  );
}
