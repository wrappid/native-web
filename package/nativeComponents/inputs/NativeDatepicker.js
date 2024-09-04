// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

import NativeTextField from "./NativeTextField";
import { getValidDateTime } from "../../helper/helper";
import { SCDatePicker } from "../../styledComponents/inputs/SCDatePicker";

export default function NativeDatePicker(props) {
  const {
    touched,
    error,
    minDate,
    maxDate,
    formik,
    id
  } = props;

  const [date, setDate] = React.useState(props?.value || "");
  const onChange = (value) => {
    if(formik){
      formik?.setFieldValue(id, value);
    }
    if(props?.onChange){
      props?.onChange(value);
    }
    setDate(value);
  };
 
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <SCDatePicker
        value={props?.value ? String(props.value) : date}
        minDate={typeof minDate === "string" ? getValidDateTime(minDate) : minDate }
        maxDate={typeof maxDate === "string" ? getValidDateTime(maxDate) : maxDate }
        onChange={onChange}
        error={touched && error && error?.length > 0 ? true : false}
        fullWidth={true}
        renderInput={(params) => (
          <NativeTextField
            {...params}
            InputLabelProps={{ ...params.InputLabelProps, shrink: true }}
            fullWidth={true}
          />
        )}
        {...props}
      />
    </LocalizationProvider>
  );
}
