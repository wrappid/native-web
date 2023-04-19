import React from "react";
import NativeFormControlLabel from "../../forms/NativeFormGroupLabel";
import NativeCheckbox from "../NativeCheckbox";

export default function NativeFormLabelCheckbox(props) {
  console.log("props", props);
  return (
    <NativeFormControlLabel
      id={props.id}
      checked={props?.formik?.values[props?.id]}
      control={
        <NativeCheckbox
          id={props.id}
          checked={props?.formik?.values[props?.id]}
          styleClasses={[...(props?.styleClasses || [])]}
          formik={props?.formik}
        />
      }
      label={props.label}
      labelPlacement={props.labelPlacement}
    />
  );
}
