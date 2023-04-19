import React from "react";
import config from "../../config/config";
import { ENV_PROD_MODE } from "../../config/constants";
import { getLabel } from "../../utils/stringUtils";
import { CoreClasses } from "@wrappid/styles";
import NativeDivider from "../dataDisplay/NativeDivider";
import NativeIcon from "../dataDisplay/NativeIcon";
import NativeH1 from "../dataDisplay/heading/NativeH1";
import NativeTypographyBody1 from "../dataDisplay/paragraph/NativeTypographyBody1";
import NativeForm from "../forms/NativeForm";
import { FORM_EDIT_MODE, FORM_VIEW_MODE } from "../forms/NativeFormConstants";
import NativeIconButton from "../inputs/NativeIconButton";
import NativeStack from "../layouts/NativeStack";
import NativeAccordion from "../surfaces/NativeAccordion";
import NativeAccordionDetail from "../surfaces/NativeAccordionDetail";
import NativeAccordionSummary from "../surfaces/NativeAccordionSummary";
import NativeCard from "../surfaces/NativeCard";
import NativeCardContent from "../surfaces/NativeCardContent";
import NativeCardHeader from "../surfaces/NativeCardHeader";
import NativeTableAction from "./NativeTableAction";
import TableRowAuditData from "./TableRowAuditData";
import StatusText from "../dataDisplay/custom/StatusText";
import NativeTypographyCaption from "../dataDisplay/paragraph/NativeTypographyCaption";
import swal from "sweetalert";

export default function NativeDataTableDetailsPane(props) {
  const {
    tableUUID,
    createFormID,
    updateFormID,
    hideForm,
    formMode,
    setFormMode,
    editable,
    deletable,
    setDetailedRowId,
    setDetailedRowData,
    detailedRowId,
    detailedRowData,
    rowActions,
    tableColumns,
    filterData,
    enableCreateEntity,
    createEntityButtonText,
    set_showDetailsPane,
    preRenderDetailsPaneComponent,
    postRenderDetailsPaneComponent,
    preRender_CreateData_DetailsPaneComponent,
    postRender_CreateData_DetailsPaneComponent,
    _expandedDevJSONSchema,
    set_expandedDevJSONSchema,
  } = props;

  return (
    <NativeCard styleClasses={[CoreClasses.LAYOUT.FULL_WIDTH_HEIGHT]}>
      <NativeCardHeader
        title={
          detailedRowData ? (
            <>
              <NativeStack direction="row" spacing={1}>
                <NativeTypographyCaption>
                  {"ID: " + detailedRowData["id"]}
                </NativeTypographyCaption>
                {detailedRowData.hasOwnProperty("id") &&
                  detailedRowData.hasOwnProperty("_status") && (
                    <NativeDivider
                      orientation="vertical"
                      variant="middle"
                      flexItem
                    />
                  )}
                <StatusText status={detailedRowData["_status"]} />
              </NativeStack>
            </>
          ) : (
            !hideForm &&
            createFormID &&
            (createEntityButtonText || `Create ${getLabel(tableUUID)}`)
          )
        }
        action={
          <NativeStack direction="row">
            {detailedRowData && rowActions && rowActions.length > 0 && (
              <NativeTableAction
                tableUUID={tableUUID}
                actions={rowActions}
                columns={tableColumns}
                rowIndex={detailedRowId}
                rowData={detailedRowData}
              />
            )}
            <NativeIconButton
              onClick={(e) => {
                set_showDetailsPane(false);
                setDetailedRowId(null);
                setDetailedRowData(null);
              }}
            >
              <NativeIcon>clear</NativeIcon>
            </NativeIconButton>
          </NativeStack>
        }
      />
      <NativeCardContent>
        {detailedRowData ? (
          <>
            {config.environment !== ENV_PROD_MODE && (
              <NativeAccordion
                expanded={_expandedDevJSONSchema}
                onChange={() => {
                  set_expandedDevJSONSchema(!_expandedDevJSONSchema);
                }}
              >
                <NativeAccordionSummary>JSON Schema</NativeAccordionSummary>
                <NativeAccordionDetail>
                  <pre>{JSON.stringify(detailedRowData, null, 2)}</pre>
                </NativeAccordionDetail>
              </NativeAccordion>
            )}
            {preRenderDetailsPaneComponent && (
              <>
                <NativeDivider />
                {React.createElement(preRenderDetailsPaneComponent, {
                  data: detailedRowData,
                })}
              </>
            )}
            {detailedRowId && detailedRowData ? (
              updateFormID &&
              !hideForm && (
                <>
                  <NativeDivider />
                  <NativeForm
                    apiMode={"edit"}
                    onMountRead={false}
                    formId={updateFormID}
                    mode={formMode}
                    allowEdit={editable}
                    allowDelete={deletable}
                    initData={detailedRowData}
                    // afterEdit={() => {
                    //   filterData();
                    // }}
                    afterCancel={() => {
                      setFormMode(FORM_VIEW_MODE);
                    }}
                    afterEditSuccess={() => {
                      // do something
                      swal({
                        icon: "success",
                        title: "Updated Successfully",
                        text: `${getLabel(updateFormID)} updated successfully`,
                        buttons: {
                          confirm: "Ok",
                        },
                      }).then((data) => {
                        set_showDetailsPane(false);
                        filterData();
                      });
                    }}
                    afterDeleteSuccess={() => {
                      // do something
                      swal({
                        icon: "success",
                        title: "Deleted Successfully",
                        text: `${getLabel(updateFormID)} deleted successfully`,
                        buttons: {
                          confirm: "Ok",
                        },
                      }).then((data) => {
                        set_showDetailsPane(false);
                        filterData();
                      });
                    }}
                    afterEditError={() => {
                      swal({
                        icon: "error",
                        title: "Updated Failure",
                        text: `${getLabel(createFormID)} updated failure`,
                        buttons: {
                          confirm: "Ok",
                        },
                      }).then((data) => {
                        // set_showDetailsPane(false);
                        // filterData();
                      });
                    }}
                    afterDeleteError={() => {
                      swal({
                        icon: "error",
                        title: "Deleted Failure",
                        text: `${getLabel(createFormID)} delete failure`,
                        buttons: {
                          confirm: "Ok",
                        },
                      }).then((data) => {
                        // set_showDetailsPane(false);
                        // filterData();
                      });
                    }}
                  />
                </>
              )
            ) : (
              <NativeTypographyBody1>No row selected</NativeTypographyBody1>
            )}
            {/**
             * @todo check if it's available show flag ticked
             */}
            {postRenderDetailsPaneComponent && (
              <>
                <NativeDivider />
                {React.createElement(postRenderDetailsPaneComponent, {
                  data: detailedRowData,
                })}
              </>
            )}
            {true && (
              <>
                <NativeDivider />
                <TableRowAuditData rowData={detailedRowData} />
              </>
            )}
          </>
        ) : (
          <>
            {preRender_CreateData_DetailsPaneComponent && (
              <>
                {React.createElement(preRender_CreateData_DetailsPaneComponent)}
              </>
            )}
            {enableCreateEntity ? (
              createFormID && (
                <>
                  <NativeForm
                    apiMode={"create"}
                    onMountRead={false}
                    formId={createFormID}
                    mode={FORM_EDIT_MODE}
                    initData={{}}
                    afterEdit={() => {
                      filterData();
                    }}
                    afterCancel={() => {
                      set_showDetailsPane(false);
                    }}
                    afterCreateSuccess={() => {
                      // do something
                      swal({
                        icon: "success",
                        title: "Created Successfully",
                        text: `${getLabel(createFormID)} created successfully`,
                        buttons: {
                          confirm: "Ok",
                        },
                      }).then((data) => {
                        set_showDetailsPane(false);
                        filterData();
                      });
                    }}
                    afterCreateError={() => {
                      swal({
                        icon: "error",
                        title: "Create Failure",
                        text: `${getLabel(createFormID)} create failure`,
                        buttons: {
                          confirm: "Ok",
                        },
                      }).then((data) => {
                        // set_showDetailsPane(false);
                        // filterData();
                      });
                    }}
                  />
                </>
              )
            ) : (
              <NativeH1>No data found</NativeH1>
            )}
            {postRender_CreateData_DetailsPaneComponent && (
              <>
                {React.createElement(
                  postRender_CreateData_DetailsPaneComponent
                )}
              </>
            )}
          </>
        )}
      </NativeCardContent>
    </NativeCard>
  );
}
