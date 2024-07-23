// eslint-disable-next-line import/order, no-unused-vars, unused-imports/no-unused-imports
import React, { useState, useRef } from "react";
import { useTheme } from "@mui/material";
import OtpInput from "react-otp-input";

export default function NativeOtpInput(props) {
  const theme = useTheme();
  const [otp, setOtp] = useState("");
  const inputRefs = useRef([]);

  // Handle OTP change
  const handleChange = (val) => {
    setOtp(val);
    const length = val.length;

    if (inputRefs.current?.[length]) {
      inputRefs.current[length].focus();
    }
  };

  // Handle keydown for backspace 
  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace") {
      event.preventDefault(); // Prevent default backspace behavior
      if (index > 0 && !otp?.[index]) {
        setOtp((prevOtp) => prevOtp.slice(0, index - 1) + prevOtp.slice(index));
        inputRefs.current?.[index - 1]?.focus();
      } else {
        setOtp((prevOtp) => prevOtp.slice(0, index) + prevOtp.slice(index + 1));
      }
    } else if (event.key === "Delete") {
      event.preventDefault(); // Prevent default delete behavior
      if (index < otp?.length) {
        // Remove character at the current index
        setOtp((prevOtp) => prevOtp.slice(0, index) + prevOtp.slice(index + 1));
        if (inputRefs.current?.[index]) {
          inputRefs.current[index].focus();
          inputRefs.current[index].setSelectionRange(0, 0);
        }
      }
    }
  };

  // Handle paste event
  const handlePaste = (event) => {
    event.preventDefault();
    const paste = event.clipboardData.getData("text").slice(0, 6);

    setOtp(paste);

    // Focus the correct input field after paste
    setTimeout(() => {
      const pasteLength = paste.length;

      if (inputRefs.current?.[pasteLength]) {
        inputRefs.current[pasteLength].focus();
        inputRefs.current[pasteLength].setSelectionRange(
          pasteLength,
          pasteLength
        ); // Adjust selection range
      } else if (inputRefs.current?.[5]) {
        inputRefs.current[5].focus();
        inputRefs.current[5].setSelectionRange(6, 6); // Adjust selection range
      }
    }, 0);
  };

  React.useEffect(() => {
    props.formik?.setFieldValue(props.id, otp);
  }, [otp]);

  return (
    <OtpInput
      onChange={handleChange}
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
        borderBottomColor: theme?.palette.primary.main,
        borderBottomStyle: "solid",
        borderBottomWidth: "none",
        color            : theme?.palette.text.primary,
        fontSize         : "2rem",
        margin           : 10,
        outline          : "none",
        width            : "100%",
      }}
      id={props.id}
      name={props.id}
      value={otp}
      // onChange={(val) => {
      //   props.formik.setFieldValue(props.id, val);
      // }}
      numInputs={6}
      renderInput={(props, index) => (
        <input
          {...props}
          ref={(element) => (inputRefs.current[index] = element)}
          onKeyDown={(event) => handleKeyDown(event, index)}
          onPaste={handlePaste} // paste event handler
        />
      )}
      renderSeparator={<span></span>}
      shouldAutoFocus={props.autoFocus == false ? false : true}
      inputType="tel"
    />
  );
}
