import React from "react";
import {
  createFormFieldProps,
  createFormGridProps,
} from "../../../utils/formUtils";
import NativeBox from "../layouts/NativeBox";

export default function NativeFormField(props) {
  const { element, formikprops } = props;
  return React.createElement(
    element?.box?.comp ? element.box.comp : NativeBox,
    createFormGridProps(element),
    element.comp
      ? React.createElement(
          element.comp,
          {
            ...createFormFieldProps(element, formikprops, "edit"),
            readOnly: !props.mode,
          },
          element.onlyView ? element.label : null
        )
      : null
  );
}
