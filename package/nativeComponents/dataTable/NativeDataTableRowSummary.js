import React from "react";
import { CoreClasses } from "@wrappid/styles";
import NativeDivider from "../dataDisplay/NativeDivider";
import NativeStack from "../layouts/NativeStack";
import NativeCardHeader from "../surfaces/NativeCardHeader";
import { DATA_TABLE_CONST } from "./../../config/dataTableConstants";
import NativeTypographySubtitle1 from "./../dataDisplay/paragraph/NativeTypographySubtitle1";
import NativeTypographyBody1 from "./../dataDisplay/paragraph/NativeTypographyBody1";
import NativeTypographyCaption from "./../dataDisplay/paragraph/NativeTypographyCaption";

export default function NativeDataTableRowSummary(props) {
  const {
    tableColumns,
    rowData,
    summaryRendererComponent,
    hasId,
    hasStatus,
    getIdComponent,
    getStatusComponent,
    getImageComponent,
    getColumnLabel,
    priority1Data,
    priority2Data,
    priority3Data,
    priority4Data,
    priority5Data,
  } = props;

  const getTitleComponent = () => {
    return priority1Data ? (
      <NativeTypographySubtitle1
        limitChars={DATA_TABLE_CONST.TABLE_CELL_MAX_CHARS}
        hideSeeMore={true}
      >
        {priority1Data.data}
      </NativeTypographySubtitle1>
    ) : (
      ""
    );
  };
  const getSubheaderComponent = () => {
    return (
      <>
        {priority2Data ? (
          <NativeTypographyBody1
            limitChars={DATA_TABLE_CONST.TABLE_CELL_MAX_CHARS}
            hideSeeMore={true}
          >
            {priority2Data.data}
          </NativeTypographyBody1>
        ) : (
          ""
        )}
        <NativeStack direction="row" spacing={1}>
          {priority3Data ? (
            <NativeTypographyCaption>
              {getColumnLabel(priority3Data.column) + priority3Data.data}
            </NativeTypographyCaption>
          ) : (
            ""
          )}
          {priority4Data ? (
            <>
              {priority3Data ? (
                <NativeDivider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                />
              ) : (
                ""
              )}
              <NativeTypographyCaption>
                {getColumnLabel(priority4Data.column) + priority4Data.data}
              </NativeTypographyCaption>
            </>
          ) : (
            ""
          )}
          {priority5Data ? (
            <>
              {priority4Data ? (
                <NativeDivider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                />
              ) : (
                ""
              )}
              <NativeTypographyCaption>
                {getColumnLabel(priority5Data.column) + priority5Data.data}
              </NativeTypographyCaption>
            </>
          ) : (
            ""
          )}
        </NativeStack>
      </>
    );
  };
  return (
    <>
      {summaryRendererComponent ? (
        React.createElement(summaryRendererComponent, {
          tableColumns: tableColumns,
          rowData: rowData,
        })
      ) : (
        <>
          <NativeCardHeader
            avatar={getImageComponent()}
            title={getTitleComponent()}
            subheader={getSubheaderComponent()}
            styleClasses={[CoreClasses.PADDING.P0]}
          />
          {
            /* hasId ?  */ <>
              <NativeDivider />
              <NativeStack
                direction="row"
                spacing={1}
                styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_FLEX_END]}
              >
                {/* hasId &&  */ getIdComponent()}
                {/* hasStatus &&  */ getStatusComponent()}
              </NativeStack>
            </> /*  : null */
          }
        </>
      )}
    </>
  );
}
