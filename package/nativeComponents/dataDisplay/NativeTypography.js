import React from "react";
import { SCTypography } from "../../styledComponents/dataDisplay/SCTypography";

const NativeTypography = React.forwardRef((props, ref) => {
  //Do not use this directly use NativeParagraph
  return (
    <SCTypography
      {...props}
      ref={ref}
    >
      {props?.code ? <pre>{props.children}</pre> : <>{props.children}</>}
    </SCTypography>
  );
});
NativeTypography.displayName = "NativeTypography";

export default NativeTypography;
