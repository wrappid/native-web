import React from "react";

import { useRef } from "react";
import { SCInput } from "../../inputs/SCInput";
import { CoreClasses } from "@wrappid/styles";
import NativeIcon from "../inputs/NativeIcon";
import NativeTypographyBody1 from "../inputs/paragraph/NativeTypographyBody1";
import NativeLabel from "../inputs/paragraph/NativeLabel";
import NativeBox from "../layouts/NativeBox";
import NativeGrid from "../layouts/NativeGrid";
import NativeFormControl from "./NativeFormControl";
import NativeFormErrorText from "./NativeFormErrorText";
import NativeFormHelperText from "./NativeFormHelperText";

export default function NativeFilePicker(props) {
  const inputRef = useRef(null);
  const handleFileOpen = () => {
    console.log("adasd");
    inputRef.current.click();
  };
  return (
    <NativeFormControl>
      <NativeLabel
        error={
          props.touched && props.error && props.error.length > 0 ? true : false
        }
        htmlFor={props.id}
      >
        {props.label}
      </NativeLabel>
      <SCInput
        id={props.id}
        inputRef={inputRef}
        type="file"
        sx={{ display: "none" }}
        inputProps={{
          readOnly: true,
        }}
        label={props.label}
        variant="standard"
        // value={props.value}
        onChange={(event) => {
          console.log("FIle Change", event.target.files[0], props.formik);
          props.formik.setFieldValue(props.id, event.target.files[0]);
        }}
        required={props.formik ? false : props.required}
        placeholder={props.placeholder}
        disabled={props.disabled}
        max={props.max}
        min={props.min}
        readOnly={props.readOnly}
        error={
          props.touched && props.error && props.error.length > 0 ? true : false
        }
      />
      {!props.readOnly && (
        <NativeBox
          type="file"
          onClick={handleFileOpen}
          // onMouseDown={handleFileOpen}
          edge="end"
          styleClasses={[CoreClasses.LAYOUT.BORDER_BOTTOM_WIDTH]}
        >
          <NativeGrid>
            <NativeTypographyBody1 gridSize={10}>
              {props.value ? props?.value?.name : "Upload file"}
            </NativeTypographyBody1>
            <NativeTypographyBody1
              gridSize={2}
              styleClasses={[CoreClasses.LAYOUT.RIGHT_ALIGN]}
            >
              <NativeIcon type="file">upload</NativeIcon>
            </NativeTypographyBody1>
          </NativeGrid>
        </NativeBox>
      )}
      {/* <NativeIconButton
        aria-label="toggle password visibility"
        type="file"
        onClick={handleFileOpen}
        // onMouseDown={handleFileOpen}
        edge="end"
      >
        <NativeIcon type="file">upload</NativeIcon>
      </NativeIconButton> */}

      <NativeFormErrorText>{props.touched && props.error}</NativeFormErrorText>
      <NativeFormHelperText>{props.helperText}</NativeFormHelperText>
    </NativeFormControl>
  );
}
