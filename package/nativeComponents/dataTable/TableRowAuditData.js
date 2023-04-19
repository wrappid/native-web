import React from "react";
import UserChip from "../dataDisplay/custom/UserChip";
import { CoreClasses } from "@wrappid/styles";
import NativeTypographyCaption from "../dataDisplay/paragraph/NativeTypographyCaption";
import NativeAlert from "../feedback/NativeAlert";
import NativeBox from "../layouts/NativeBox";
import NativeGrid from "../layouts/NativeGrid";

const alertStyle = [
  CoreClasses.PADDING.PX1,
  CoreClasses.PADDING.PY0,
  CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_FLEX_END,
  CoreClasses.TEXT.TEXT_END,
];

/**
 *
 * @param {*} props
 * @returns
 */
export default function TableRowAuditData(props) {
  const { rowData } = props;
  return (
    <NativeGrid>
      <NativeBox gridProps={{ gridSize: { sm: 4 } }}>
        {getDeletedDataComponent(rowData)}
      </NativeBox>
      <NativeBox gridProps={{ gridSize: { sm: 4 } }}>
        {getUpdatedDataComponent(rowData)}
      </NativeBox>
      <NativeBox gridProps={{ gridSize: { sm: 4 } }}>
        {getCreatedDataComponent(rowData)}
      </NativeBox>
    </NativeGrid>
  );
}

/**
 *
 * @param {*} rowData
 * @returns
 */
function getCreatedDataComponent(rowData) {
  return (
    rowData?.createdAt && (
      <NativeAlert icon={false} severity="success" styleClasses={alertStyle}>
        <NativeTypographyCaption>
          Created at&nbsp;
          {(rowData?.createdAt &&
            new Date(rowData?.createdAt).toLocaleString()) ||
            "not known"}
        </NativeTypographyCaption>
        {rowData?.createdBy && (
          <>
            &nbsp;by&nbsp;
            <UserChip userid={rowData.createdBy} />
          </>
        )}
      </NativeAlert>
    )
  );
}

/**
 *
 * @param {*} rowData
 * @returns
 */
function getUpdatedDataComponent(rowData) {
  return (
    rowData?.updatedAt && (
      <NativeAlert icon={false} severity="warning" styleClasses={alertStyle}>
        <NativeTypographyCaption>
          Updated at&nbsp;
          {(rowData?.updatedAt &&
            new Date(rowData?.updatedAt).toLocaleString()) ||
            "not known"}
        </NativeTypographyCaption>
        {rowData?.updatedBy && (
          <>
            &nbsp;by&nbsp;
            <UserChip userid={rowData.updatedBy} />
          </>
        )}
      </NativeAlert>
    )
  );
}

/**
 *
 * @param {*} rowData
 * @returns
 */
function getDeletedDataComponent(rowData) {
  return (
    rowData?.deletedAt && (
      <NativeAlert icon={false} severity="error" styleClasses={alertStyle}>
        <NativeTypographyCaption>
          Deleted at&nbsp;
          {(rowData?.deletedAt &&
            new Date(rowData?.deletedAt).toLocaleString()) ||
            "not known"}
        </NativeTypographyCaption>
        {rowData?.deletedBy && (
          <>
            &nbsp;by&nbsp;
            <UserChip userid={rowData.deletedBy} />
          </>
        )}
      </NativeAlert>
    )
  );
}
