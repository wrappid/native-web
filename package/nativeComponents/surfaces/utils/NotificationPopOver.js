import React from "react";

import NativeDivider from "../../surfaces/NativeDivider";
import NativeIcon from "../../surfaces/NativeIcon";
import NativeTypographyBody1 from "../../surfaces/paragraph/NativeTypographyBody1";
import NativeIconButton from "../../inputs/NativeIconButton";
import NativeBox from "../../layouts/NativeBox";
import { CoreClasses } from "@wrappid/styles";

export default function NotificationPopOver() {
  return (
    <>
      <NativeBox styleClasses={[CoreClasses.POPOVER.CONTENT]}>
        <NativeBox
          styleClasses={[
            CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN,
            CoreClasses.LAYOUT.VERTICAL_CENTER,
          ]}
        >
          <NativeTypographyBody1>Notifications</NativeTypographyBody1>

          <NativeIconButton disabled>
            <NativeIcon>clear_all</NativeIcon>
          </NativeIconButton>
        </NativeBox>

        <NativeDivider />
      </NativeBox>

      <NativeBox styleClasses={[CoreClasses.POPOVER.CONTENT]}>
        <NativeTypographyBody1
          sx={{ minWidth: "350px" }}
          styleClasses={[CoreClasses.MARGIN.MY4, CoreClasses.PADDING.PX5]}
        >
          No new notifications
        </NativeTypographyBody1>
      </NativeBox>
    </>
  );
}
