// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { UtilityClasses } from "@wrappid/styles";

import NativeImage from "../../dataDisplay/NativeImage";

export default function NativeLinkedInAuthComponent(props){
  return (
    <>
      <NativeImage
        styleClasses={[UtilityClasses.CURSOR.CURSOR_POINTER]}
        src="https://www.svgrepo.com/show/448234/linkedin.svg"
        width="38"
        height="38"
        {...props}/>
    </>

  );
}