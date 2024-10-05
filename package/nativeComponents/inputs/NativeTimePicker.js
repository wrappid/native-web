// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";

import NativeTextField from "./NativeTextField";
import { SCTimePicker } from "../../styledComponents/inputs/SCTimePicker";

export default function NativeTimePicker(props) {
  const {
    id,
    name,
    label,
    onChange,
    value,
    formik,
    ampm,
    disablePast,
    disableFuture,
    touched,
    error,
    shouldDisableTime,
    minTime,
    maxTime,
  } = props;

  function getValidDateTime(){}
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <SCTimePicker
        id={id}
        name={name}
        label={label}
        inputFormat={ampm ? "hh:mm " : "HH:mm"}
        ampm={ampm}
        minTime={ typeof minTime === "string" ? getValidDateTime(minTime) : minTime}
        maxTime={ typeof maxTime === "string" ? getValidDateTime(maxTime) : maxTime}
        disablePast={disablePast}
        disableFuture={disableFuture}
        shouldDisableTime={shouldDisableTime}
        value={
          value
            ? typeof value === "string" && value.includes(":")
              ? moment().set({
                hour  : value.split(":")[0],
                minute: value.split(":")[1],
              })
              : value
            : null
        }
        onChange={(val) => {
          // eslint-disable-next-line no-console
          console.log("V", val);
          if (formik) {
            formik.setFieldValue(id, val.format(ampm ? "hh:mm" : "HH:mm"));
          } else if (onChange) {
            onChange(val);
          }
        }}
        error={touched && error && error.length > 0 ? true : false}
        fullWidth={true}
        renderInput={(params) => (
          <NativeTextField
            helperText={
              touched && error && error.length > 0
                ? error
                : ""
            }
            {...params}
            InputLabelProps={{ ...params.InputLabelProps, shrink: true }}
            fullWidth={true}
          />
        )}
      />
      
    </LocalizationProvider>
  );
}