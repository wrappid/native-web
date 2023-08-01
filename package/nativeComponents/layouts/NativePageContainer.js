import React from "react";
import NativeBox from "./NativeBox";

export default function NativePageContainer(props) {
  const {uid, coreClasses, route} = props
  return  <>
  {/* {route?.title && (
    <DocumentTitle title={route?.title || "NO TITLE PROVIDED"} />
  )}
  {route?.description && (
    <DocumentMetaDescription
      metaDescription={route?.description || "NO DESCRIPTION PROVIDED"}
    />
  )}
  {route?.keywords && (
    <DocumentMetaKeywords metaKeywords={route?.keywords || ""} />
  )} */}
  {/* ---------------------------------------------------- */}
    <NativeBox styleClasses={
      uid
        ? [coreClasses.LAYOUT.PAGE_CONTAINER]
        : [coreClasses.LAYOUT.LOGGED_OUT_PAGE_CONTAINER]
    }>
   {props.children}
  </NativeBox>
</>
}
