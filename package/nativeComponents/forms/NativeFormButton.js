import React from "react";
import {
  createFormActionProps,
  createFormButtonProps,
} from "../../utils/formUtils";

export default function NativeFormButton(props) {
  const { element, formikprops, handleButtonCLick, submitLoading } = props;

  return element.comp
    ? React.createElement(element.comp, {
        ...createFormButtonProps(element, formikprops, handleButtonCLick),
        disabled: submitLoading,
      })
    : null;
}
