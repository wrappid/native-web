// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
// eslint-disable-next-line import/no-unresolved
import { UtilityClasses } from "@wrappid/styles";
import moment from "moment";

import NativeFormHelperText from "./NativeFormHelperText";
import NativeTextField from "./NativeTextField";
import { SCDateTimePicker } from "../../styledComponents/inputs/SCDateTimePicker";

export default function NativeDateTimeRangePicker(props) {
  const { label, value, formik } = props;
  let spValue = {
    endDate:
      value && value.endDate
        ? typeof value.endDate === "string"
          ? moment(value.endDate)
          : value.endDate
        : "",
    startDate:
      value && value.startDate
        ? typeof value.startDate === "string"
          ? moment(value.startDate)
          : value.startDate
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
        onChange={(val) => {
          formik.setFieldValue(props.id, {
            ...value,
            startDate: moment(val).format("YYYY-MM-DD hh:mm"),
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
        onChange={(val) => {
          formik.setFieldValue(props.id, {
            ...value,
            endDate: moment(val).format("YYYY-MM-DD hh:mm"),
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

      <NativeFormHelperText styleClasses={[UtilityClasses.LAYOUT.NO_MARGIN_P]}>
        {props.helperText}
      </NativeFormHelperText>
    </LocalizationProvider>
  );
}
