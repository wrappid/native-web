// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { SCCardActionArea } from "../../styledComponents/surfaces/SCCardActionArea";

export default function NativeCardActionArea(props) {
  return <SCCardActionArea {...props}>{props.children}</SCCardActionArea>;
}
