// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

export default function NativeFlatList(props) {
  const { tableData, query, renderItem } = props;

  return query ? tableData
    ?.slice(
      query?.page * query?.maxRowInPage,
      query?.page * query?.maxRowInPage + query?.maxRowInPage
    )
    ?.map((rowData, rowIndex) => renderItem(rowData, rowIndex))
    :
    tableData
      ?.map((rowData, rowIndex) => renderItem(rowData, rowIndex));
}
