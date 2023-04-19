import React from "react";
import { SCSkeleton } from "../../feedback/SCSkeleton";

export default function NativeSkeleton(props) {
  return <SCSkeleton {...props}>{props.children}</SCSkeleton>;
}
