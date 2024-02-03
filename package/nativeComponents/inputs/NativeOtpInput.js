// eslint-disable-next-line import/order, no-unused-vars, unused-imports/no-unused-imports
import React from "react";
import { useTheme } from "@mui/material";
import OtpInput from "react-otp-input";

export default function NativeOtpInput(props) {
  const theme = useTheme();

  return (
    <OtpInput
      containerStyle={{
        // width: "100%"
        display    : "flex",
        marginLeft : -10,
        marginRight: -10,
        marginTop  : -14,
      }}
      inputStyle={{
        background       : "transparent",
        border           : "none",
        borderBottomColor: theme.palette.primary.main,
        borderBottomStyle: "solid",
        borderBottomWidth: "none",
        color            : theme.palette.text.primary,
        fontSize         : "2rem",
        margin           : 10,
        outline          : "none",
        width            : "100%"
      }}
      id={props.id}
      name={props.id}
      value={props.value}
      onChange={(val) => {
        props.formik.setFieldValue(props.id, val);
      }}
      numInputs={6}
      renderInput={(props) => <input {...props} />}
      renderSeparator={<span></span>}
      shouldAutoFocus={props.autoFocus == false ? false : true}
      inputType="tel"
    />
  );
}