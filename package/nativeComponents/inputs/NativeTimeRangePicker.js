import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import NativeTextField from "./NativeTextField";
import NativeFormHelperText from "./NativeFormHelperText";
import { CoreClasses } from "@wrappid/styles";
import { SCTimePicker } from "../../inputs/SCTimePicker";
import NativeBox from "../layouts/NativeBox";
import NativeLabel from "../inputs/paragraph/NativeLabel";
import NativeGrid from "../layouts/NativeGrid";
import moment from "moment";

export default function NativeTimeRangePicker(props) {
  const { id, label, onChange, value, formik } = props;
  var spValue = {
    startTime:
      value && value.startTime
        ? typeof value.startTime === "string" && value.startTime.includes(":")
          ? moment().set({
              hour: value.startTime.split(":")[0],
              minute: value.startTime.split(":")[1],
            })
          : value.startTime
        : "",
    endTime:
      value && value.endTime
        ? typeof value.endTime === "string" && value.endTime.includes(":")
          ? moment().set({
              hour: value.endTime.split(":")[0],
              minute: value.endTime.split(":")[1],
            })
          : value.endTime
        : "",
  };

  // console.log("END VALUE", id, spValue, value);

  return (
    <NativeBox>
      <NativeLabel>{label}</NativeLabel>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <NativeGrid>
          <SCTimePicker
            gridProps={{
              gridSize: {
                xs: 12,
                sm: 6,
              },
            }}
            label={props.startTimeLabel ? props.startTimeLabel : "Start Time"}
            inputFormat="hh:mm"
            value={spValue?.startTime}
            onChange={(v) => {
              formik.setFieldValue(props.id, {
                ...value,
                startTime: moment(v).format("hh:mm"),
              });
            }}
            error={
              props.touched && props.error && props.error.length > 0
                ? true
                : false
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
          <SCTimePicker
            gridProps={{
              gridSize: {
                xs: 12,
                sm: 6,
              },
            }}
            label={props.endTimeLabel ? props.endTimeLabel : "End Time"}
            inputFormat="hh:mm"
            value={spValue?.endTime}
            onChange={(v) => {
              formik.setFieldValue(props.id, {
                ...value,
                endTime: moment(v).format("hh:mm"),
              });
            }}
            error={
              props.touched && props.error && props.error.length > 0
                ? true
                : false
            }
            renderInput={(params) => (
              <NativeTextField
                error={props.touched && props.error}
                helperText={
                  props.touched && props.error && props.error.length > 0
                    ? props.error
                    : ""
                }
                {...params}
              />
            )}
          />
        </NativeGrid>
        <NativeFormHelperText styleClasses={[CoreClasses.LAYOUT.NO_MARGIN_P]}>
          {props.helperText}
        </NativeFormHelperText>
      </LocalizationProvider>
    </NativeBox>
  );
}
