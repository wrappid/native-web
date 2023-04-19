import * as React from "react";
import Collapse from "@mui/material/Collapse";
import NativeTableRow from "../dataDisplay/NativeTableRow";
import NativeTableCell from "../dataDisplay/NativeTableCell";
import NativeForm from "../forms/NativeForm";
import { FORM_VIEW_MODE } from "../forms/NativeFormConstants";
import TableRowAuditData from "./TableRowAuditData";
import { CoreClasses } from "@wrappid/styles";
import { useSelector } from "react-redux";

export default function NativeTableCollapsible({
  rowIndex,
  formID,
  open,
  ToggleOpen,
  mode = FORM_VIEW_MODE,
  columns,
  columnsLength,
  rowData,
  endpoint,
  successType,
  errorType,
  editable,
  deletable,
}) {
  const forms = useSelector((state) => state?.forms?.rawform) || {};

  return (
    <>
      {open && (
        <NativeTableRow>
          <NativeTableCell
            styleClasses={[CoreClasses.PADDING.P1]}
            colSpan={columnsLength || 1}
          >
            <Collapse in={open} timeout="auto" unmountOnExit>
              <NativeForm
                apiMode={"edit"}
                onMountRead={false}
                formId={formID}
                mode={mode}
                allowEdit={editable}
                allowDelete={deletable}
                initData={rowData}
                afterEdit={() => {}}
                afterCancel={() => {
                  ToggleOpen(rowIndex);
                }}
              />
              <TableRowAuditData rowData={rowData} />
            </Collapse>
          </NativeTableCell>
        </NativeTableRow>
      )}
    </>
  );
}
