import React from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import NativeIconButton from "./NativeIconButton";
import NativeInput from "./NativeInput";
import NativeInputAdornment from "./NativeInputAdornment";

export default function NativeConfirmPassword(props) {
  const [showPassword, togglePasswordView] = useState(false);

  const handleClickShowPassword = () => {
    togglePasswordView(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <NativeInput
      {...props}
      type="password"
      showPassword={showPassword}
      endAdornment={
        <NativeInputAdornment position="end">
          <NativeIconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            edge="end"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </NativeIconButton>
        </NativeInputAdornment>
      }
    />
  );
}
