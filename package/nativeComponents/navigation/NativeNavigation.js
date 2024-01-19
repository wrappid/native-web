// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { BrowserRouter } from "react-router-dom";

export default function NativeNavigation(props) {
  const { children } = props;

  return <BrowserRouter>{children}</BrowserRouter>;
}
