// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

// eslint-disable-next-line no-unused-vars

import { SCImageBackground } from "../../styledComponents/layouts/SCImageBackground";

export default function NativeImageBackground(props) {
  const { source, resizeMode = "cover" } = props;

  return (
    <SCImageBackground
      {...props}
      style={{
        // eslint-disable-next-line space-infix-ops
        backgroundImage : "url("+source+")",
        backgroundRepeat: "no-repeat",
        backgroundSize  : resizeMode, 
      }}>
      {props.children}
    </SCImageBackground>
  );
}
