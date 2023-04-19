import React from "react";
import NativePopover from "../utils/NativePopover";

export default function NativeDataTableRowActionPopover(props) {
  const { anchorEl, _rowHoverIndex, rowIndex } = props;

  return (
    <NativePopover
      id="mouse-over-popover"
      sx={{
        pointerEvents: "none",
        boxShadow: "none",
      }}
      open={_rowHoverIndex === rowIndex}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "center",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "center",
        horizontal: "right",
      }}
      hideBackdrop={true}
      PaperProps={{
        elevation: 0,
        sx: { pointerEvents: "auto" },
      }}
    >
      {props.children}
    </NativePopover>
  );
}
