import React from "react";
import { DATA_TABLE_CONST } from "../../config/dataTableConstants";
import { SCTablePagination } from "../../dataDisplay/SCTablePagination";

export default function NativeTablePagination(props) {
  return (
    <SCTablePagination
      component={"div"}
      labelRowsPerPage="" // make it clean
      rowsPerPageOptions={DATA_TABLE_CONST.ROWS_PER_PAGE_OPTIONS}
      {...props}
    />
  );
}
