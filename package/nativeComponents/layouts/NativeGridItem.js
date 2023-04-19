import React from "react";
import { SCGridItem } from "../../layouts/SCGridItem";

export default function NativeGridItem(props) {
  return <SCGridItem props>{props.children}</SCGridItem>;
}
