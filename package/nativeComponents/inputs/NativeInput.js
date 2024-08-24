// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { useTheme } from "@mui/material";

import NativeFormControl from "./NativeFormControl";
import NativeInputLabel from "./NativeInputLabel";
import { getUUID } from "../../helper/appUtils";
import { SCInput } from "../../styledComponents/inputs/SCInput";

export default function NativeInput(props) {
  const { NativeId = getUUID() } = props;
  const theme = useTheme();
  const defStyle = {};

  const [inputText, setInputText] = React.useState(props?.value || null);
  const onChange = (event) => {
    props?.onChange && props.onChange(event.target.value);
    setInputText(event.target.value);
  };

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
        value={props?.value ? String(props.value) : inputText}
        onChange={onChange}
        required={props.formik ? false : props.required}
        placeholder={props.placeholder}
        disabled={props.disabled}
        max={props.max}
        min={props.min}
        readOnly={props.readOnly}
        onBlur={props?.formik?.handleBlur}
        inputProps={props.inputProps ? { ...props.inputProps, style: defStyle } : { style: defStyle }}
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
              // eslint-disable-next-line no-console
              console.log("CLICKED");
              props.onFormFocus(props.editId);
            }
            : () => {
              // eslint-disable-next-line no-console
              console.log("CLICKED else");
            }
        }
        theme={theme}
      />
    </NativeFormControl>
  );
}
