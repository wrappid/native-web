// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { SCSkeleton } from "../../styledComponents/feedback/SCSkeleton";

export default function NativeSkeleton(props) {
  return <SCSkeleton {...props}>{props.children}</SCSkeleton>;
}
