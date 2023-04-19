import React from "react";
import NativeButton from "../NativeButton";
import NativeIconButton from "../NativeIconButton";
import { CoreClasses } from "@wrappid/styles";
import NativeIcon from "../../inputs/NativeIcon";
import { isJson } from "../../../utils/stringUtils";

export default function NativeResponsiveButton(props) {
  return (
    <>
      <NativeButton
        {...props}
        styleClasses={[CoreClasses.DISPLAY.NONE, CoreClasses.DISPLAY.SM.BLOCK]}
        variant="outlined"
      />
      <NativeIconButton
        styleClasses={[CoreClasses.DISPLAY.BLOCK, CoreClasses.DISPLAY.SM.NONE]}
        title={props?.label || props?.title}
        onClick={props?.OnClick || props?.onClick}
      >
        <NativeIcon
          options={
            typeof props?.icon === "object"
              ? props?.icon
              : typeof props?.icon === "string" && isJson(props?.icon)
              ? JSON.parse(props?.icon)
              : { icon: props?.icon }
          }
        />
      </NativeIconButton>
    </>
  );
}
