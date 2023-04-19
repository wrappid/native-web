import React from "react";

import { SCCardActionArea } from "../../surfaces/SCCardActionArea";

export default function NativeCardActionArea(props) {
  return <SCCardActionArea {...props}>{props.children}</SCCardActionArea>;
}
