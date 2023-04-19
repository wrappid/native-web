import React from "react";
import {
  createFormFieldProps,
  createFormGridProps,
} from "../../../utils/formUtils";
import { CoreClasses } from "@wrappid/styles";
import NativeTypographyBody1 from "../dataDisplay/paragraph/NativeTypographyBody1";
import NativeLabel from "../dataDisplay/paragraph/NativeLabel";
import NativeGrid from "../layouts/NativeGrid";

export default function NativeViewField(props) {
  const { element, data } = props;
  return React.createElement(
    element?.box?.comp ? element.box.comp : NativeGrid,
    createFormGridProps(element),
    <>
      {React.createElement(NativeLabel, {}, element?.label)}
      {React.createElement(
        element.viewComp ? element.viewComp : NativeBody1,
        createFormFieldProps(element),
        data && data[element.id] ? data[element.id] : "NA"
      )}
    </>
  );
}
