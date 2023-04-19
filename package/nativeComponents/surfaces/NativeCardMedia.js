import React from "react";

import { SCCardMedia } from "../../surfaces/SCCardMedia";

export default function NativeCardMedia(props) {
  return <SCCardMedia {...props}>{props.children}</SCCardMedia>;
}
