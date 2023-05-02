import React from "react";
import { useRef } from "react";
import { SCRichTextEditor } from "../../../styledComponents/inputs/custom/SCRichTextEditor";
import NativeInputLabel from "../NativeInputLabel";

export default function NativeRichTextEditor(props) {
  const ref = useRef(null);

  return (
    <>
      <NativeInputLabel
        shrink={true}
        error={
          props.touched && props.error && props.error.length > 0 ? true : false
        }
        htmlFor={props.id}
      >
        {props.label}
      </NativeInputLabel>
      <SCRichTextEditor
        id={props.id}
        value={
          props.formik?.values && props.formik?.values[props.id]
            ? props.formik?.values[props.id]
            : props.value
            ? props.value
            : ""
        }
        onChange={props.onChange}
        ref={props.ref || ref}
        tabIndex={props.tabIndex || 1}
        onBlur={
          props.onBlur
            ? props.onBlur
            : (v) => {
                props.formik?.setFieldValue(props.id, v);
              }
        }
      />
    </>
  );
}
