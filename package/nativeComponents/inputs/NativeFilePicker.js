// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React, { useRef } from "react";

// eslint-disable-next-line import/no-unresolved
import { UtilityClasses, StyledComponentsClasses } from "@wrappid/styles";

import NativeIconButton from "./NativeIconButton";
import { SCInput } from "../../styledComponents/inputs/SCInput";
import NativeIcon, { __IconTypes } from "../dataDisplay/NativeIcon";
import NativeTypographyBody1 from "../dataDisplay/paragraph/NativeTypographyBody1";
import NativeBox from "../layouts/NativeBox";
import NativeGrid from "../layouts/NativeGrid";

export default function NativeFilePicker(props) {
  const inputRef = useRef(null);
  const handleFileOpen = () => {
    inputRef.current.click();
  };

  return (
    <>
      <SCInput
        id={props.id}
        inputRef={inputRef}
        type="file"
        sx={{ display: "none" }}
        inputProps={{ readOnly: true }}
        label={props.label}
        variant="standard"
        // value={props.value}
        onChange={(event) => {
          // eslint-disable-next-line no-console
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
          edge="end"
          styleClasses={[StyledComponentsClasses.WEB?.FILE_PICKER]}
        >
          <NativeGrid>
            <NativeTypographyBody1 gridProps={{ gridSize: 10 }}>
              {props.value ? props?.value?.name : "Upload file"}
            </NativeTypographyBody1>

            <NativeBox
              styleClasses={[UtilityClasses?.ALIGNMENT?.JUSTIFY_CONTENT_FLEX_END]}
              gridProps={{ gridSize: 2 }}
            >{props?.value?.name ?
                <NativeIconButton onClick={()=>{props?.formik?.setFieldValue(props.id, null);}}>
                  <NativeIcon type={__IconTypes.MATERIAL_ICON} name="cancel" childrenFlag={true}/>
                </NativeIconButton>
                :
                <NativeIcon type={__IconTypes.MATERIAL_ICON} name="upload" childrenFlag={true}/>
              }
            </NativeBox>
          </NativeGrid>
        </NativeBox>
      )}
    </>
  );
}
