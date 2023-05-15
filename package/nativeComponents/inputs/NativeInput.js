import React from "react";
import { getUUID } from "../../helper/appUtils";
import { SCInput } from "../../styledComponents/inputs/SCInput";
import NativeFormControl from "./NativeFormControl";
import NativeFormErrorText from "./NativeFormErrorText";
import NativeFormHelperText from "./NativeFormHelperText";
import NativeInputLabel from "./NativeInputLabel";

export default function NativeInput(props) {
  const { NativeId = getUUID() } = props;
  return (
    <NativeFormControl NativeId={`Native-formControl-${NativeId}`}>
      <NativeInputLabel
        shrink={true}
        error={
          props.touched && props.error && props.error.length > 0 ? true : false
        }
        htmlFor={props.id}
      >
        {props.label}
      </NativeInputLabel>
      <SCInput
        id={props.id}
        type={props.showPassword || !props.type ? "text" : props.type}
        label={props.label}
        styleClasses={[...(props.styleClasses || [])]}
        variant="standard"
        value={props.value || ""}
        onChange={props.onChange}
        required={props.formik ? false : props.required}
        placeholder={props.placeholder}
        disabled={props.disabled}
        max={props.max}
        min={props.min}
        readOnly={props.readOnly}
        onBlur={props?.formik?.handleBlur}
        inputProps={props.inputProps ? props.inputProps : {}}
        error={
          props.touched && props.error && props.error.length > 0 ? true : false
        }
        endAdornment={props.endAdornment ? props.endAdornment : null}
        multiline={props.multiline ? props.multiline : false}
        rows={props.rows}
        maxRows={props.maxRows}
        minRows={props.minRows}
        fullWidth={true}
        onFocus={
          props.onFormFocus && props.editId && props.readOnly
            ? () => {
                console.log("CLICKED");
                props.onFormFocus(props.editId);
              }
            : () => {
                console.log("CLICKED else");
              }
        }
      />
      <NativeFormErrorText>{props.touched && props.error}</NativeFormErrorText>
      <NativeFormHelperText>{props.helperText}</NativeFormHelperText>
    </NativeFormControl>
  );
}
