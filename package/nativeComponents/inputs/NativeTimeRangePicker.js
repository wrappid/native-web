// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
// eslint-disable-next-line import/no-unresolved
import { UtilityClasses } from "@wrappid/styles";
import moment from "moment";

import NativeFormHelperText from "./NativeFormHelperText";
import NativeTextField from "./NativeTextField";
import { SCTimePicker } from "../../styledComponents/inputs/SCTimePicker";
import NativeLabel from "../dataDisplay/paragraph/NativeLabel";
import NativeBox from "../layouts/NativeBox";
import NativeGrid from "../layouts/NativeGrid";

export default function NativeTimeRangePicker(props) {
  const { label, value, formik } = props;
  let spValue = {
    endTime:
      value && value.endTime
        ? typeof value.endTime === "string" && value.endTime.includes(":")
          ? moment().set({
            hour  : value.endTime.split(":")[0],
            minute: value.endTime.split(":")[1],
          })
          : value.endTime
        : "",
    startTime:
      value && value.startTime
        ? typeof value.startTime === "string" && value.startTime.includes(":")
          ? moment().set({
            hour  : value.startTime.split(":")[0],
            minute: value.startTime.split(":")[1],
          })
          : value.startTime
        : "",
  };

  return (
    <NativeBox>
      <NativeLabel>{label}</NativeLabel>

      <LocalizationProvider dateAdapter={AdapterMoment}>
        <NativeGrid>
          <SCTimePicker
            gridProps={{
              gridSize: {
                sm: 6,
                xs: 12,
              },
            }}
            label={props.startTimeLabel ? props.startTimeLabel : "Start Time"}
            inputFormat="hh:mm"
            value={spValue?.startTime}
            onChange={(val) => {
              formik.setFieldValue(props.id, {
                ...value,
                startTime: moment(val).format("hh:mm"),
              });
            }}
            error={
              props.touched && props.error && props.error.length > 0
                ? true
                : false
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
                InputLabelProps={{ ...params.InputLabelProps, shrink: true }} 
                fullWidth={true}
              />
            )}
          />

          <SCTimePicker
            gridProps={{
              gridSize: {
                sm: 6,
                xs: 12,
              },
            }}
            label={props.endTimeLabel ? props.endTimeLabel : "End Time"}
            inputFormat="hh:mm"
            value={spValue?.endTime}
            onChange={(val) => {
              formik.setFieldValue(props.id, {
                ...value,
                endTime: moment(val).format("hh:mm"),
              });
            }}
            error={
              props.touched && props.error && props.error.length > 0
                ? true
                : false
            }
            fullWidth={true}
            renderInput={(params) => (
              <NativeTextField
                error={props.touched && props.error}
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
        </NativeGrid>

        <NativeFormHelperText styleClasses={[UtilityClasses.LAYOUT.NO_MARGIN_P]}>
          {props.helperText}
        </NativeFormHelperText>
      </LocalizationProvider>
    </NativeBox>
  );
}
