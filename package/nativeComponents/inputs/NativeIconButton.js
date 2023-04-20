import React from "react";
import { SCIconButton } from "../../inputs/SCIconButton";
import NativeTooltip from "../dataDisplay/NativeTooltip";

export default function NativeIconButton(props) {
  const {
    title,
    titlePlacement = "bottom",
    size = "small",
    ...restProps
  } = props;
  return (
    <>
      {title ? (
        <NativeTooltip title={title} arrow placement={titlePlacement}>
          <SCIconButton {...restProps} size={size} />
        </NativeTooltip>
      ) : (
        <SCIconButton {...restProps} size={size} />
      )}
    </>
  );
}
