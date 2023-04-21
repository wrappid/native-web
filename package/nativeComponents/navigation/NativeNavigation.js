import React from "react";
import { BrowserRouter } from "react-router-dom";

export default function NativeNavigation(props) {
  const { children } = props;
  return <BrowserRouter>{children}</BrowserRouter>;
}
