/* eslint-disable no-unused-vars */
// eslint-disable-next-line unused-imports/no-unused-imports
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { UtilityClasses } from "@wrappid/styles";

import NativeImage from "../../dataDisplay/NativeImage";

export default function NativeGithubAuthComponent(props) {
    
  return (
    <NativeImage
      styleClasses={[UtilityClasses.CURSOR.CURSOR_POINTER]}
      src="https://www.svgrepo.com/show/512317/github-142.svg"
      width="38"
      height="38"
      {...props}/>
  );
}
