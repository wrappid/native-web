import React from "react";
import { SCCheckbox } from "../../styledComponents/inputs/SCCheckbox";
import { UtilityClasses } from "@wrappid/styles";
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
    ...restProps
  } = props;
  return (
    <>
      {label ? (
        <NativeFormControlLabel
          label={label}
          styleClasses={[UtilityClasses.MARGIN.MR0]}
          control={
            <SCCheckbox
              {...restProps}
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
          {...restProps}
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
