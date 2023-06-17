import NativeFormErrorText from "./NativeFormErrorText";
import NativeFormHelperText from "./NativeFormHelperText";
import { UtilityClasses } from "@wrappid/styles";
import NativeBox from "../layouts/NativeBox";
import { SCOtpInput } from "../../styledComponents/inputs/SCOtpInput";
import { CoreClasses } from "@wrappid/core";
import React from "react";
import Box from '@mui/material/Box';
import { MuiOtpInput } from "mui-one-time-password-input";

const NativeOtpInput = (props) => {

  const [otp, setOtp] = useState('');

  const handleChange = (newValue) => {
    setOtp(newValue)
  };

  const {
    id,
    value,
    onChange,
    length = 6,
    gap = 0,
    formik,
    ...restProps
  } = props;

  // const handleChange = (otpvalue) => {
  //   formik?.setFieldValue(id, otpvalue);
  //   if (onchange) {
  //     onChange(otpvalue);
  //   }
  // };

  const matchIsNumeric = (text) => {
    const isString = typeof text === "string";

    let isNumeric = true;

    let isnan = isNaN(Number(text));

    if (isString && text !== "" && isnan) {
      isNumeric = false;
    }

    return isNumeric;
  };

  const validateChar = (value) => {
    return matchIsNumeric(value);
  };

  return (
    <Box
      sx={{
        backgroundColor: "lightblue",
        width: "100vw",
        height: "100vh",
      }}
    >
      <MuiOtpInput value={otp} onChange={handleChange} length={6} gap={"10px"}  />
    </Box>
  );
};

export default NativeOtpInput;


{/*
<NativeBox styleClasses={[UtilityClasses.MARGIN.MB2]}>
      <SCOtpInput
        {...restProps}
        id={id}
        value={value}
        length={length}
        display="flex"
        gap={gap}
        onChange={(otpvalue) => handleChange(otpvalue)}
        validateChar={validateChar}
      />
    </NativeBox>
*/}