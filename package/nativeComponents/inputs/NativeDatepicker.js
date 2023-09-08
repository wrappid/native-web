import React from "react";
import { SCDatePicker } from "../../styledComponents/inputs/SCDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import NativeTextField from "./NativeTextField";
import { getValidDateTime } from "../../helper/helper";

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
        minDate={typeof minDate === "string"? getValidDateTime(minDate):  minDate }
        maxDate={typeof maxDate === "string"? getValidDateTime(maxDate):  maxDate }
        onChange={(v) => {
          onChange && !formik
            ? onChange(v)
            : formik?.setFieldValue(
                id,
                v ? v?.format("YYYY-MM-DD") : null
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
