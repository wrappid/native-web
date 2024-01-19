// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { getUUID } from "../../helper/appUtils";
import { SCTable } from "../../styledComponents/dataDisplay/SCTable";

export default function NativeTable(props) {
  let _uuid = getUUID();
  let containerId = props?.NativeId ? "tc_" + props.NativeId : "tc_" + _uuid;

  return (
    <SCTable NativeId={containerId} {...props}>
      {props.children}
    </SCTable>
  );
}
