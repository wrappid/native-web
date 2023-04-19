import React from "react";
import { CoreClasses } from "@wrappid/styles";
import NativeTypographyBody1 from "../../dataDisplay/paragraph/NativeTypographyBody1";
import NativeBox from "../../layouts/NativeBox";

export default function ExportData(props) {
  const {} = props;
  return (
    <NativeBox styleClasses={[CoreClasses.TABLE.TABLE_FILTER_COLUMN_BOX]}>
      <NativeTypographyBody1>
        Export options are coming soon...{" "}
      </NativeTypographyBody1>
    </NativeBox>
  );
}
