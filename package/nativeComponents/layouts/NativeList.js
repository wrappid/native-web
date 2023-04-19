import React from "react";
import { SCList } from "../../layouts/SCList";

export default function NativeList(props) {
  return <SCList {...props}>{props.children}</SCList>;
}
