// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

import NativeTextField from "./NativeTextField";
import { getValidDateTime } from "../../helper/helper";
import { SCDatePicker } from "../../styledComponents/inputs/SCDatePicker";

export default function NativeDatePicker(props) {
  const {
    id,
    name,
    label,
    onChange,
    value,
    disablePast,
    disableFuture,
    formik,
    touched,
    error,
    shouldDisableDate,
    minDate,
    maxDate,
  } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <SCDatePicker
        id={id}
        name={name}
        label={label}
        inputFormat="DD/MM/YYYY"
        value={value || ""}
        minDate={typeof minDate === "string" ? getValidDateTime(minDate) : minDate }
        maxDate={typeof maxDate === "string" ? getValidDateTime(maxDate) : maxDate }
        onChange={(value) => {
          onChange && !formik
            ? onChange(value)
            : formik?.setFieldValue(
              id,
              value ? value?.format("YYYY-MM-DD") : null
            );
        }}
        error={touched && error && error?.length > 0 ? true : false}
        fullWidth={true}
        disablePast={disablePast}
        disableFuture={disableFuture}
        shouldDisableDate={shouldDisableDate}
        renderInput={(params) => (
          <NativeTextField
            {...params}
            InputLabelProps={{ ...params.InputLabelProps, shrink: true }}
            fullWidth={true}
          />
        )}
      />
    </LocalizationProvider>
  );
}
