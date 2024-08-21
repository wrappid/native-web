// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React, { useContext } from "react";

// eslint-disable-next-line import/no-unresolved
import { UtilityClasses } from "@wrappid/styles";

import { SCDialog } from "../../styledComponents/feedback/SCDialog";
import { SCDialogActions } from "../../styledComponents/feedback/SCDialogActions";
import { SCDialogContent } from "../../styledComponents/feedback/SCDialogContent";
import { SCDialogContentText } from "../../styledComponents/feedback/SCDialogContentText";
import { SCDialogTitle } from "../../styledComponents/feedback/SCDialogTitle";
import { SCButton } from "../../styledComponents/inputs/SCButton";
import NativeIcon from "../dataDisplay/NativeIcon";
import NativeBox from "../layouts/NativeBox";

export default function NativeDialog(props) {
  const { dialogInitValue, DialogContext } = props;
  const { dialog, setDialog } = useContext(DialogContext);

  if (dialog?.showDialog === false) {
    return;
  } else {
    return (
      <SCDialog
        open={dialog?.showDialog || false}
        onClose={() => {
          if (
            dialog.onClose &&
              typeof dialog.onClose === "function"
          ) {
            dialog.onClose();
          }
          setDialog(dialogInitValue);
        }}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        PaperProps={{
          style: {
            minHeight: "30%",
            minWidth : "20%",
          }
        }}
        { ...dialog?.dialogProps}
      >
        {dialog?.type === "info" ? (
          <NativeBox
            styleClasses={[UtilityClasses?.PADDING?.P2, UtilityClasses?.ALIGNMENT?.JUSTIFY_CONTENT_CENTER, UtilityClasses.COLOR.TEXT_WARNING]}
          >
            <NativeIcon
              type="material-icons"
              childrenFlag={true}
              name="info"
              size="large"/>
          </NativeBox>
        ) : dialog?.type === "error" ? (
          <NativeBox
            styleClasses={[UtilityClasses?.PADDING?.P2, UtilityClasses?.ALIGNMENT?.JUSTIFY_CONTENT_CENTER, UtilityClasses.COLOR.TEXT_ERROR]}
          >
            <NativeIcon
              type="material-icons"
              childrenFlag={true}
              name="cancel"
              size="large"/>
          </NativeBox>
        ) : (
          <NativeBox
            styleClasses={[UtilityClasses?.PADDING?.P2, UtilityClasses?.ALIGNMENT?.JUSTIFY_CONTENT_CENTER, UtilityClasses?.COLOR?.TEXT_SUCCESS]}
          >
            <NativeIcon
              type="material-icons"
              childrenFlag={true}
              name="check_circle"
              size="large"/>
          </NativeBox>
        )}

        <SCDialogTitle
          styleClasses={[UtilityClasses?.ALIGNMENT?.JUSTIFY_CONTENT_CENTER]}
          id="dialog-title"
        >
          {dialog?.title || ""}
        </SCDialogTitle>

        <SCDialogContent>
          <SCDialogContentText id="dialog-description">
            {dialog?.subtitle || ""}
          </SCDialogContentText>
        </SCDialogContent>

        <SCDialogActions>
          {
            !dialog?.noCancelButton &&
              <SCButton
                onClick={() => {
                  if (
                    dialog.cancelButton &&
                  typeof dialog.cancelButton === "function"
                  ) {
                    dialog.cancelButton();
                  }
                  setDialog(dialogInitValue);
                }}
              >
                {dialog?.cancelButtonLabel || "Cancel"}
              </SCButton>
          }

          {
            !dialog?.noDoneButton &&
            <SCButton
              onClick={() => {
                if (
                  dialog.doneButton &&
                  typeof dialog.doneButton === "function"
                ) {
                  dialog.doneButton();
                }
                setDialog(dialogInitValue);
              }}
            >
              {dialog?.doneButtonLabel || "Done"}
            </SCButton>
          }
        </SCDialogActions>
      </SCDialog>
    );
  }
}
