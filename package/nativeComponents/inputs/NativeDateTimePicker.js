// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
// eslint-disable-next-line import/no-unresolved

import NativeTextField from "./NativeTextField";
import { SCDateTimePicker } from "../../styledComponents/inputs/SCDateTimePicker";

export default function NativeDateTimePicker(props) {
  const { id, label, formik, value: propsValue, onChange: propsOnChange } = props;

  const handleChange = (newValue) => {
    const formattedValue = newValue ? newValue.format("YYYY-MM-DD hh:mm a") : null;

    if (formik) {
      formik.setFieldValue(id, formattedValue);
    }
    if (propsOnChange) {
      propsOnChange(formattedValue);
    }
  };

  const value = formik ? formik.values[id] : propsValue;

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <SCDateTimePicker
        id={props.id}
        name={props.id}
        label={label}
        inputFormat="DD/MM/YYYY hh:mm a"
        value={value}
        onChange={handleChange}
        error={
          props.touched && props.error && props.error.length > 0 ? true : false
        }
        renderInput={(params) => (
          <NativeTextField
            {...params}
            error=""
            fullWidth={true}
          />
        )}
      />
    </LocalizationProvider>
  );
}

