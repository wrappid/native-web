import React from "react";
import { SCTablePagination } from "../../dataDisplay/SCTablePagination";

export default function NativeTablePagination(props) {
  return (
    <SCTablePagination
      component={"div"}
      labelRowsPerPage="" // make it clean
      {...props}
    />
  );
}
