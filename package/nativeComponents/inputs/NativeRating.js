import React from "react";
import { SCRating } from "../../styledComponents/inputs/SCRating";

export default function NativeRating(props) {
  return <SCRating {...props}>{props.children}</SCRating>;
}
