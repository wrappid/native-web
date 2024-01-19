// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { SCBackdrop } from "../../styledComponents/feedback/SCBackdrop";

export default function NativeBackdrop(props) {
  return <SCBackdrop {...props}>{props.children}</SCBackdrop>;
}
