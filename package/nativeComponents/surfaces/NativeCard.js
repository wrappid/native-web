import React from "react";

import { SCCard } from "../../surfaces/SCCard";

export default function NativeCard(props) {
  return <SCCard {...props}>{props.children}</SCCard>;
}
