import React from "react";
import NativePopover from "../utils/NativePopover";

export default function NativeDataTableToolPopover(props) {
  const { id, open, anchorEl, onClose, anchorOrigin } = props;

  return (
    <NativePopover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={anchorOrigin}
    >
      {props.children}
    </NativePopover>
  );
}
