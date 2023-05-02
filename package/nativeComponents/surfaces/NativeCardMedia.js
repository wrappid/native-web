import React from "react";

import { SCCardMedia } from "../../styledComponents/surfaces/SCCardMedia";

export default function NativeCardMedia(props) {
  return <SCCardMedia {...props}>{props.children}</SCCardMedia>;
}
