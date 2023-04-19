import * as React from "react";
import NativeTableHead from "../dataDisplay/NativeTableHead";
import NativeTableRow from "../dataDisplay/NativeTableRow";
import NativeTableHeadCell from "../dataDisplay/NativeTableHeadCell";
import { getLabel } from "../../utils/stringUtils";
import NativeCheckbox from "../inputs/NativeCheckbox";
import NativeTableSortLabel from "../dataDisplay/NativeTableSortLabel";
import NativeTypographyBody1 from "../dataDisplay/paragraph/NativeTypographyBody1";
import { CoreClasses } from "@wrappid/styles";

export default function NativeDataTableHead(props) {
  const {
    tableHeadProps,
    tableUUID,
    // tableColumnsShown,
    tableColumnsToShow,
    selectable = true,
    sortable = true,
    rows,
    columns,
    // filteredColumns,
    showAuditColumns,
    auditColumnsKey,
    order,
    onRequestSort,
    selected,
    handleRowSelectAll,
    _showDetailsPane,
  } = props;

  return (
    <NativeTableHead {...tableHeadProps}>
      {/* Table Column Head */}
      <NativeTableRow>
        {columns &&
        columns.length > 0 &&
        tableColumnsToShow &&
        tableColumnsToShow.length > 0 ? (
          <>
            {/* Selectable */}
            {selectable && (
              <NativeTableHeadCell
                align={"center"}
                sx={{ maxWidth: "32px" }}
                styleClasses={[CoreClasses.PADDING.P0]}
              >
                <NativeCheckbox
                  key={`${tableUUID}-selectall-row`}
                  checked={rows.length !== 0 && rows.length === selected.length}
                  onChange={(e) => {
                    handleRowSelectAll(e);
                  }}
                />
              </NativeTableHeadCell>
            )}
            {/* Table Head - Columns */}
            {_showDetailsPane ? (
              <NativeTableHeadCell styleClasses={[CoreClasses.PADDING.PX1]}>
                {getLabel(tableUUID)}
              </NativeTableHeadCell>
            ) : (
              <>
                {columns
                  ?.filter((col) => {
                    return tableColumnsToShow?.includes(col.id);
                  })
                  ?.map((column, columnIndex) => {
                    return (
                      <NativeTableHeadCell
                        key={tableUUID + "-th-" + column.id}
                        align={
                          column.id === "action"
                            ? "center"
                            : column?.align || "left"
                        }
                        sortDirection={
                          sortable && order[column.id] ? order : false
                        }
                      >
                        {sortable && column?.sortable !== false ? (
                          <NativeTableSortLabel
                            active={Object.keys(order).includes(column.id)}
                            direction={
                              Object.keys(order).includes(column.id)
                                ? order[column.id]
                                : "asc"
                            }
                            onClick={(e) => {
                              let orderDirection =
                                order && order.hasOwnProperty(column.id)
                                  ? order[column.id] === "asc" && "desc"
                                  : "asc";
                              onRequestSort(e, column.id, orderDirection);
                            }}
                          >
                            <NativeTypographyBody1 noWrap={true}>
                              {column.label}
                            </NativeTypographyBody1>
                          </NativeTableSortLabel>
                        ) : (
                          <NativeTypographyBody1>
                            {column.label}
                          </NativeTypographyBody1>
                        )}
                      </NativeTableHeadCell>
                    );
                  })}
              </>
            )}
          </>
        ) : (
          <>
            <NativeTableHeadCell>
              Please select a column to show data
            </NativeTableHeadCell>
          </>
        )}
      </NativeTableRow>
    </NativeTableHead>
  );
}
