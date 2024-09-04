// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
// eslint-disable-next-line import/no-unresolved
import { UtilityClasses } from "@wrappid/styles";

import NativeFormHelperText from "./NativeFormHelperText";
import NativeTextField from "./NativeTextField";
import { SCDateTimePicker } from "../../styledComponents/inputs/SCDateTimePicker";
import NativeBox from "../layouts/NativeBox";

export default function NativeDateTimePicker(props) {
  const { formik, id } = props;
  const [dateTime, setDateTime] = React.useState(props?.value || "");
  const onChange = (value) => {
    if(formik){
      formik?.setFieldValue(id, value);
    }
    if(props?.onChange){
      props?.onChange(value);
    }
    setDateTime(value);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <NativeBox>
        <SCDateTimePicker
          value={props?.value ? String(props.value) : dateTime}
          onChange={onChange}
          fullWidth={true}
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
              InputLabelProps={{ ...params.InputLabelProps, shrink: true }} 
              fullWidth={true}
            />
          )}
          {...props}
        />

        <NativeFormHelperText styleClasses={[UtilityClasses.MARGIN.M0]}>
          {props?.helperText}
        </NativeFormHelperText>
      </NativeBox>
    </LocalizationProvider>
  );
}
