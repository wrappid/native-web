import React from "react";
import { CoreClasses } from "@wrappid/styles";
import NativeTable from "../dataDisplay/NativeTable";
import NativeTableBody from "../dataDisplay/NativeTableBody";
import NativeTableCell from "../dataDisplay/NativeTableCell";
import NativeTableHead from "../dataDisplay/NativeTableHead";
import NativeTableHeadCell from "../dataDisplay/NativeTableHeadCell";
import NativeTableRow from "../dataDisplay/NativeTableRow";
import NativeSkeleton from "../feedback/NativeSkeleton";

export default function NativeTableSkeleton(props) {
  const { showData, maxRowInPage } = props;
  return (
    <NativeTable>
      {/* <NativeTableHead>
        {showData && (
          <NativeTableRow>
            <NativeTableCell
              colSpan={5}
              styleClasses={[CoreClasses.DATA_DISPLAY.TEXT_CENTER]}
            >
              Please select atleast one column to show data on table.
            </NativeTableCell>
          </NativeTableRow>
        )}
        <NativeTableRow>
          {[...Array(5)].map((e, hi) => (
            <NativeTableHeadCell key={`skeleton-cell-${hi}`}>
              <NativeSkeleton variant="text" />
            </NativeTableHeadCell>
          ))}
        </NativeTableRow>
      </NativeTableHead> */}
      <NativeTableBody>
        {[...Array(maxRowInPage)].map((e, ri) => (
          <NativeTableRow key={`skeleton-cell-${ri}`}>
            {[...Array(5)].map((e, ci) => (
              <NativeTableCell key={`skeleton-cell-${ci}`}>
                <NativeSkeleton variant="text" />
              </NativeTableCell>
            ))}
          </NativeTableRow>
        ))}
      </NativeTableBody>
    </NativeTable>
  );
}
