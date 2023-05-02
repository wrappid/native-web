import React from "react";
import { SCCheckbox } from "../../styledComponents/inputs/SCCheckbox";
import { CoreClasses } from "@wrappid/styles";
import NativeFormControlLabel from "./NativeFormControlLabel";

export default function NativeCheckbox(props) {
  const {
    id,
    styleClasses = [],
    formik,
    children,
    onChange,
    label,
    value,
  } = props;
  return (
    <>
      {label ? (
        <NativeFormControlLabel
          label={label}
          styleClasses={[CoreClasses.MARGIN.MR0]}
          control={
            <SCCheckbox
              id={id}
              checked={formik ? value : props.checked}
              styleClasses={[...(styleClasses || [])]}
              onChange={
                onChange && !formik
                  ? onChange
                  : (v) => {
                      formik?.setFieldValue(id, v.target.checked);
                    }
              }
            />
          }
        />
      ) : (
        <SCCheckbox
          id={id}
          checked={formik ? value : props.checked}
          styleClasses={[...(styleClasses || [])]}
          onChange={
            onChange && !formik
              ? onChange
              : (v) => {
                  formik?.setFieldValue(id, v.target.checked);
                }
          }
        />
      )}
    </>
  );
}
