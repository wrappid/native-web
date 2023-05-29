import React from "react";

export default function NativeFlatList(props) {
  const { tableData, query, renderItem } = props;

  return tableData
    .slice(
      query?.page * query?.maxRowInPage,
      query?.page * query?.maxRowInPage + query?.maxRowInPage
    )
    .map((rowData, rowIndex) => renderItem(rowData, rowIndex));
}
