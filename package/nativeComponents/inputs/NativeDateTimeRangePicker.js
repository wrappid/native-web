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
import NativeBox from "../layouts/NativeBox";
import NativeStack from "../layouts/NativeStack";

export default function NativeDateTimeRangePicker(props) {
  const { value, formik } = props;
  let spValue = {
    endDateTime:
      value && value.endDateTime
        ? typeof value.endDateTime === "string"
          ? moment(value.endDateTime)
          : value.endDateTime
        : "",
    startDateTime:
      value && value.startDateTime
        ? typeof value.startDateTime === "string"
          ? moment(value.startDateTime)
          : value.startDateTime
        : "",
  };

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <NativeStack direction="row" spacing={3} >
        <NativeBox>
          <SCDateTimePicker
            id={props.id}
            name={props.id}
            label={"Start DateTime"}
            inputFormat="DD/MM/YYYY hh:mm a"
            value={spValue?.startDateTime}
            onChange={(val) => {
              formik.setFieldValue(props.id, {
                ...value,
                startDateTime: moment(val).format("YYYY-MM-DD hh:mm a"),
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
        </NativeBox>

        <NativeBox styleClasses={[UtilityClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}>-</NativeBox>

        <NativeBox>

          <SCDateTimePicker
            id={props.id}
            name={props.id}
            label={"End DateTime"}
            inputFormat="DD/MM/YYYY hh:mm a"
            value={spValue?.endDateTime}
            onChange={(val) => {
              formik.setFieldValue(props.id, {
                ...value,
                endDateTime: moment(val).format("YYYY-MM-DD hh:mm a"),
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

          <NativeFormHelperText styleClasses={[UtilityClasses.MARGIN.P0]}>
            {props.helperText}
          </NativeFormHelperText>

        </NativeBox>
      </NativeStack> 
    </LocalizationProvider>
  );
}