// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { SCTablePagination } from "../../styledComponents/dataDisplay/SCTablePagination";

export default function NativeTablePagination(props) {
  return (
    <SCTablePagination
      component={"div"}
      labelRowsPerPage="" // make it clean
      {...props}
    />
  );
}
