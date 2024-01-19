// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { UtilityClasses } from "@wrappid/styles";

import NativeFormControlLabel from "./NativeFormControlLabel";
import { SCCheckbox } from "../../styledComponents/inputs/SCCheckbox";

export default function NativeCheckbox(props) {
  const {
    id,
    styleClasses = [],
    formik,
    // children,
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
                  : (event) => {
                    formik?.setFieldValue(id, event.target.checked);
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
              : (event) => {
                formik?.setFieldValue(id, event.target.checked);
              }
          }
        />
      )}
    </>
  );
}
