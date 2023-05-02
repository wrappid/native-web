import React from "react";
import { useRef } from "react";
import { SCInput } from "../../styledComponents/inputs/SCInput";
import { CoreClasses } from "@wrappid/styles";
import NativeAvatar from "../dataDisplay/NativeAvatar";
import NativeBadge from "../dataDisplay/NativeBadge";
import NativeIcon from "../dataDisplay/NativeIcon";
import NativeBox from "../layouts/NativeBox";
import NativeFormControl from "./NativeFormControl";
import NativeFormErrorText from "./NativeFormErrorText";
import NativeFormHelperText from "./NativeFormHelperText";

export default function NativeImagePicker(props) {
  const inputRef = useRef(null);
  const handleFileOpen = () => {
    console.log("adasd");
    inputRef.current.click();
  };
  return (
    <NativeFormControl>
      <SCInput
        id={props.id}
        inputRef={inputRef}
        type="file"
        sx={{ display: "none" }}
        inputProps={{
          readOnly: true,
          accept: "image/*",
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
      {/* {!props.readOnly && ( */}

      {/* )} */}
      {!props.readOnly ? (
        <NativeBox
          styleClasses={[
            CoreClasses.NAVIGATION.LINK_STYLE,
            CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
          ]}
          aria-label="toggle password visibility"
          type="file"
          onClick={handleFileOpen}
          // onMouseDown={handleFileOpen}
          edge="end"
        >
          <NativeBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={<NativeIcon>photo_camera</NativeIcon>}
          >
            <NativeAvatar
              type="file"
              styleClasses={props.styleClasses}
              src={
                props.value
                  ? typeof props.value === "string"
                    ? props.value
                    : URL.createObjectURL(props.value)
                  : "no_image.png"
              }
            />
          </NativeBadge>
        </NativeBox>
      ) : (
        <NativeAvatar
          type="file"
          styleClasses={props.styleClasses}
          src={
            props.value
              ? typeof props.value === "string"
                ? props.value
                : URL.createObjectURL(props.value)
              : "no_image.png"
          }
        />
      )}

      <NativeFormErrorText>{props.touched && props.error}</NativeFormErrorText>
      <NativeFormHelperText>{props.helperText}</NativeFormHelperText>
    </NativeFormControl>
  );
}
