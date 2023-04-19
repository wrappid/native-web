import React from "react";
import { getStatusTextColorClass } from "../../../utils/tableUtils";
import NativeTypographyCaption from "../../dataDisplay/paragraph/NativeTypographyCaption";
import { CoreClasses } from "@wrappid/styles";

export default function StatusText(props) {
  const { status } = props;
  return (
    <NativeTypographyCaption
      styleClasses={[
        getStatusTextColorClass(status || ""),
        CoreClasses.TEXT.TEXT_WEIGHT_BOLD,
        CoreClasses.TEXT.TEXT_UPPERCASE,
      ]}
    >
      {status || "UNKNOWN"}
    </NativeTypographyCaption>
  );
}
