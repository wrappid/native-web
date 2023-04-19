import React from "react";
import NativeH from "./NativeH";

export default function NativeH6(props) {
  return (
    <NativeH {...props} __level="h6">
      {props.children}
    </NativeH>
  );
}
