import React from 'react'
import OtpInput from "react-otp-input";
import { useTheme } from "@mui/material";

export default function NativeOtpInput(props) {
  const theme = useTheme()
  return (
      <OtpInput
        containerStyle={{
          // width: "100%"
          display: "flex",
          marginLeft: -10,
          marginRight: -10,
          marginTop: -14,
        }}
        inputStyle={{
          width: "100%",
          margin: 10,
          color: theme.palette.text.primary,
          border: "none",
          outline: "none",
          borderBottomStyle: "solid",
          borderBottomWidth: "none",
          borderBottomColor: theme.palette.primary.main,
          fontSize: "2rem",
        }}
        id={props.id}
        name={props.id}
        value={props.value}
        onChange={(v) => {
          props.formik.setFieldValue(props.id, v);
        }}
        numInputs={6}
        renderInput={(props) => <input {...props} />}
        renderSeparator={<span></span>}
        shouldAutoFocus={props.autoFocus == false ? false : true}
      />
  );
};