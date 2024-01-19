// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { SCTextField } from "../../styledComponents/inputs/SCTextField";

export default function NativeConfirmPasswordField(props) {
  return (
    <SCTextField
      id={props.id}
      label={props.label}
      variant="standard"
      value={props.value}
      onChange={props.onChange}
      required={props.formik ? false : props.required}
      placeholder={props.placeholder}
      disabled={props.disabled}
      max={props.max}
      min={props.min}
      type={"password"}
      helperText={
        props.formik &&
        props.formik.errors[props.id] &&
        props.formik.touched[props.id]
          ? props.formik.errors[props.id]
          : props.helperText
      }
      error={
        props.formik &&
        props.formik.errors[props.id] &&
        props.formik.touched[props.id]
          ? props.formik.errors[props.id]
          : false
      }
    />
  );
}
