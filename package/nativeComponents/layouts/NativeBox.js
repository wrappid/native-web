import React from "react";
import { SCBox } from "../../styledComponents/layouts/SCBox";

const NativeBox = React.forwardRef((props, ref) => {
  return <SCBox {...props} ref={ref} />;
});

NativeBox.displayName = "NativeBox";

export default NativeBox;
