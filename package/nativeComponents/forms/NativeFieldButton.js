import React from "react";
import { createFormButtonProps } from "../../utils/formUtils";
import NativeIcon from "../dataDisplay/NativeIcon";
import NativeIconButton from "../inputs/NativeIconButton";

export default function NativeFieldButton(props) {
  const { element, formikprops, handleButtonCLick, submitLoading } = props;
  let buttonProps = {
    ...createFormButtonProps(element, formikprops, handleButtonCLick),
    disabled: submitLoading,
  };

  // console.log("ICON BUTTON ", buttonProps);

  return (
    <NativeIconButton
      disabled={buttonProps.disabled ? true : false}
      onClick={
        element.actionType === "submit"
          ? formikprops?.handleSubmit
          : buttonProps?.OnClick
      }
    >
      <NativeIcon fontSize="small">
        {element.icon
          ? element.icon
          : element.actionType === "submit"
          ? "save"
          : element.actionType === "button"
          ? "cancel"
          : ""}
      </NativeIcon>
    </NativeIconButton>
  );
}
