// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import NativeBox from "./NativeBox";

export default function NativePageContainer(props) {
  // eslint-disable-next-line no-unused-vars
  const { uid, coreClasses, route } = props;

  return <>
    {/* ---------------------------------------------------- */}
    <NativeBox styleClasses={
      uid
        ? [coreClasses.LAYOUT.PAGE_CONTAINER]
        : [coreClasses.LAYOUT.LOGGED_OUT_PAGE_CONTAINER]
    }>
      {props.children}
    </NativeBox>
  </>;
}
