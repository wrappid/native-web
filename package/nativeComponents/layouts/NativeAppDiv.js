import React from "react";
import { SCAppDiv } from "../../../styledComponents/layouts/SCAppDiv";

export default function NativeAppDiv(props) {
  return <SCAppDiv {...props}>{props.children}</SCAppDiv>;
}
