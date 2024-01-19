// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { SCCardMedia } from "../../styledComponents/surfaces/SCCardMedia";

export default function NativeCardMedia(props) {
  return <SCCardMedia {...props}>{props.children}</SCCardMedia>;
}
