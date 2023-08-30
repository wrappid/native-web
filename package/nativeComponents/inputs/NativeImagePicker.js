import React from "react";
import { useRef } from "react";
import { SCInput } from "../../styledComponents/inputs/SCInput";
import NativeAvatar from "../dataDisplay/NativeAvatar";
import NativeBadge from "../dataDisplay/NativeBadge";
import NativeIcon, { __IconTypes } from "../dataDisplay/NativeIcon";
import NativeBox from "../layouts/NativeBox";

export default function NativeImagePicker(props) {
  const {
    id,
    formik,
    label,
    value,
    defaultImage,
    placeholder,
    disabled,
    readOnly,
    touched,
    error,
    ...restProps
  } = props;
  const inputRef = useRef(null);
  const handleFileOpen = () => {
    console.log("adasd");
    inputRef.current.click();
  };
  return (
    <>
      <SCInput
        id={id}
        inputRef={inputRef}
        type="file"
        sx={{ display: "none" }}
        inputProps={{
          readOnly: true,
          accept: "image/*",
        }}
        label={label}
        variant="standard"
        onChange={(event) => {
          console.log("FIle Change", event.target.files[0], formik);
          formik.setFieldValue(id, event.target.files[0]);
        }}
        required={formik ? false : required}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        error={
          touched && error && error.length > 0 ? true : false
        }
      />
      {/* {!readOnly && ( */}

      {/* )} */}
      {!readOnly ? (
        <NativeBox
          styleClasses={
            [
              // CoreClasses.NAVIGATION.LINK_STYLE,
              // CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
            ]
          }
          aria-label="toggle password visibility"
          type="file"
          onClick={handleFileOpen}
          // onMouseDown={handleFileOpen}
          edge="end"
        >
          <NativeBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={
              <NativeIcon childrenFlag={true} name="photo_camera" type={__IconTypes.MATERIAL_ICON} />
            }
          >
            <NativeAvatar
              type="file"
              styleClasses={styleClasses}
              src={
                value
                  ? typeof value === "string"
                    ? value
                    : URL.createObjectURL(value)
                  : defaultImage
              }
            />
          </NativeBadge>
        </NativeBox>
      ) : (
        <NativeAvatar
          type="file"
          styleClasses={styleClasses}
          src={
            value
              ? typeof value === "string"
                ? value
                : URL.createObjectURL(value)
              : "no_image.png"
          }
        />
      )}
    </>
  );
}
