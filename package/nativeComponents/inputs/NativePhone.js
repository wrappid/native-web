import React from "react";
import NativeInput from "./NativeInput";

export default function NativePhone(props) {
  return <NativeInput {...props} type="number" />;
}
