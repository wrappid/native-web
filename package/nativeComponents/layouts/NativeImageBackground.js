// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line no-unused-vars
import { UTurnLeft } from '@mui/icons-material';

import {SCImageBackground} from "../../styledComponents/layouts/SCImageBackground";

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
