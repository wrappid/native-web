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
import NativeStack from "../layouts/NativeStack";

export default function NativeTimeRangePicker(props) {
  const { label, value, id, formik } = props;
  const [startTime, setStartTime] = React.useState(props?.value || "");
  const [endTime, setEndTime] = React.useState(props?.value || "");
  const onChangeStartTime = (value) => {
    if(formik){
      formik?.setFieldValue(id, value);
    }
    if(props?.onChange){
      props?.onChange(value);
    }
    setStartTime(value);
  };
  const onChangeEndTime = (value) => {
    if(formik){
      formik?.setFieldValue(id, value);
    }
    if(props?.onChange){
      props?.onChange(value);
    }
    setEndTime(value);
  };

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
        <NativeStack direction="row" spacing={3} >
          <NativeBox>
            <SCTimePicker
              gridProps={{
                gridSize: {
                  sm: 6,
                  xs: 12,
                },
              }}
              label={props.startTimeLabel ? props.startTimeLabel : "Start Time"}
              inputFormat="hh:mm"
              value={ spValue?.startTime ? String(spValue?.startTime) : startTime}
              onChange={onChangeStartTime}
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

            {props?.helperText?.start && (
              <NativeFormHelperText styleClasses={[UtilityClasses.MARGIN.M0]}>
                {props?.helperText?.start}
              </NativeFormHelperText>
            )}
          </NativeBox>

          <NativeBox styleClasses={[UtilityClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}>-</NativeBox>

          <NativeBox>
            <SCTimePicker
              gridProps={{
                gridSize: {
                  sm: 6,
                  xs: 12,
                },
              }}
              label={props.endTimeLabel ? props.endTimeLabel : "End Time"}
              inputFormat="hh:mm"
              value={ spValue?.endTime ? String(spValue?.endTime) : endTime}
              onChange={onChangeEndTime}
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

            {props?.helperText?.end && (
              <NativeFormHelperText styleClasses={[UtilityClasses.MARGIN.M0]}>
                {props?.helperText?.end}
              </NativeFormHelperText>
            )}
          </NativeBox>
        </NativeStack> 
      </LocalizationProvider>
    </NativeBox>
  );
}
