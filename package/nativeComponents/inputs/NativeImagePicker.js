// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React, { useRef } from "react";

import { SCInput } from "../../styledComponents/inputs/SCInput";
import NativeAvatar from "../dataDisplay/NativeAvatar";
import NativeBadge from "../dataDisplay/NativeBadge";
import NativeIcon, { __IconTypes } from "../dataDisplay/NativeIcon";
import NativeBox from "../layouts/NativeBox";
import NativeIconButton from  "./NativeIconButton";

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
    required,
    styleClasses,
    // eslint-disable-next-line no-unused-vars
    ...restProps
  } = props;
  const inputRef = useRef(null);
  const handleFileOpen = () => {
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
          accept  : "image/*",
          readOnly: true,
        }}
        label={label}
        variant="standard"
        onChange={(event) => {
          // eslint-disable-next-line no-console
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
          styleClasses={[]}
          aria-label="toggle password visibility"
          type="file"
          edge="end"
        >
          <NativeBadge
            overlap="circular"
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            badgeContent={
              <NativeIconButton  onClick={handleFileOpen} title={`Change Image`}  >
                <NativeIcon childrenFlag={true} name="photo_camera" type={__IconTypes.MATERIAL_ICON} />
              </NativeIconButton>
              
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
