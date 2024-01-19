// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import NativeInput from "./NativeInput";

export default function NativeTextarea(props) {
  return (
    <NativeInput
      {...props}
      multiline={true}
      minRows={3}
      maxRows={6}
      inputProps={{ style: { resize: "vertical" } }}
    />
  );
}
