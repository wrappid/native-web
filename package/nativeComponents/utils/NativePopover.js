import React from "react";
import { getUUID } from "../../helper/appUtils";
import { SCPopover } from "../../utils/SCPopover";

export default function NativePopover(props) {
  const {
    // popover property
    id = getUUID(),
    // content
    headerComponent,
    children,
    footerComponent,
    ...restProps
  } = props;
  return (
    <SCPopover
      id={id}
      // PaperProps={{
      //   sx: { minWidth: "300px" },
      // }}
      {...restProps}
    >
      {/* <NativeBox styleClasses={[CoreClasses.POPOVER.HEADER]}>
        {headerComponent}
      </NativeBox>
      <NativeBox styleClasses={[CoreClasses.POPOVER.CONTENT]}></NativeBox>
      <NativeBox styleClasses={[CoreClasses.POPOVER.FOOTER]}>
        {footerComponent}
      </NativeBox> */}
      {children}
    </SCPopover>
  );
}
