import NativeFormErrorText from "./NativeFormErrorText";
import NativeFormHelperText from "./NativeFormHelperText";
import { UtilityClasses } from "@wrappid/styles";
import NativeBox from "../layouts/NativeBox";
import { SCOtpInput } from "../../styledComponents/inputs/SCOtpInput";
import React from "react";

const NativeOtpInput = (props) => {
  const {
    id,
    value,
    onChange,
    length = 6,
    gap = 0,
    formik,
    ...restProps
  } = props;

  const handleChange = (otpvalue) => {
    formik?.setFieldValue(id, otpvalue);
    if (onchange) {
      onChange(otpvalue);
    }
  };

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

      {props.error && <NativeFormErrorText>{props.error}</NativeFormErrorText>}

      <NativeFormHelperText styleClasses={[UtilityClasses.MARGIN.MT_N2]}>
        {props.helperText}
      </NativeFormHelperText>
    </NativeBox>
  );
};

export default NativeOtpInput;