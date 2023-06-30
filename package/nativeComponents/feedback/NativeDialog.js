import React, { useContext } from "react";
import { SCDialog } from "../../styledComponents/feedback/SCDialog";
import { SCDialogTitle } from "../../styledComponents/feedback/SCDialogTitle";
import { SCDialogContent } from "../../styledComponents/feedback/SCDialogContent";
import { SCDialogActions } from "../../styledComponents/feedback/SCDialogActions";
import { SCDialogContentText } from "../../styledComponents/feedback/SCDialogContentText";
import { SCButton } from "../../styledComponents/inputs/SCButton";
import NativeBox from "../layouts/NativeBox";
import { UtilityClasses } from "@wrappid/styles";
import NativeIcon from "../dataDisplay/NativeIcon";

export default function NativeDialog(props) {
  const { dialogInitValue, DialogContext } = props;
  const { dialog, setDialog } = useContext(DialogContext);

  if (dialog?.showDialog === false) {
    return;
  } else {
    return (
      <SCDialog
        open={dialog?.showDialog || false}
        onClose={() => setDialog(dialogInitValue)}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        {dialog?.type === "info" ? (
          <NativeBox
            styleClasses={[
              UtilityClasses?.ALIGNMENT?.JUSTIFY_CONTENT_CENTER,
              UtilityClasses.COLOR.TEXT_WARNING,
            ]}
          >
            <NativeIcon type="material-icons" childrenFlag={true} name="info" size="medium"/>
          </NativeBox>
        ) : dialog?.type === "error" ? (
          <NativeBox
            styleClasses={[
              UtilityClasses?.ALIGNMENT?.JUSTIFY_CONTENT_CENTER,
              UtilityClasses.COLOR.TEXT_ERROR,
            ]}
          >
            <NativeIcon type="material-icons" childrenFlag={true} name="cancel" size="medium"/>
          </NativeBox>
        ) : (
          <NativeBox
            styleClasses={[
              UtilityClasses?.ALIGNMENT?.JUSTIFY_CONTENT_CENTER,
              UtilityClasses?.COLOR?.TEXT_SUCCESS,
            ]}
          >
            <NativeIcon type="material-icons" childrenFlag={true} name="check_circle" size="medium"/>
          </NativeBox>
        )}
        <SCDialogTitle
          styleClasses={[
            UtilityClasses?.ALIGNMENT?.JUSTIFY_CONTENT_CENTER,
          ]}
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
        </SCDialogActions>
      </SCDialog>
    );
  }
}
