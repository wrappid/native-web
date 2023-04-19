import React from "react";
import { viewString } from "../../utils/formUtils";
import { CoreClasses } from "@wrappid/styles";
import NativeTypographyBody1 from "../dataDisplay/paragraph/NativeTypographyBody1";
import NativeCardHeader from "../surfaces/NativeCardHeader";
import NativeFormHeaderActions from "./NativeFormHeaderActions";

export default function NativeFormHeader(props) {
  const { heading, subHeading, headerAction, index, action, formId } = props;
  return (!props.mode &&
    headerAction &&
    action !== undefined &&
    action.length > 0) ||
    (heading !== undefined && heading.length > 0) ||
    (subHeading !== undefined && subHeading.length > 0) ? (
    <NativeCardHeader
      styleClasses={[CoreClasses.PADDING.P0, CoreClasses.PADDING.PR1]}
      title={
        <NativeTypographyBody1
          styleClasses={[CoreClasses.TEXT.TEXT_WEIGHT_BOLD]}
        >
          {viewString(heading, "heading")}
        </NativeTypographyBody1>
      }
      subheader={
        <NativeTypographyBody1>
          {viewString(subHeading, "sub heading")}
        </NativeTypographyBody1>
      }
      action={
        !props.mode &&
        headerAction && (
          <NativeFormHeaderActions
            id={formId}
            index={index || 0}
            action={action}
          />
        )
      }
    />
  ) : null;
}
