import React, {useContext} from "react";
import { SCDialog } from "../../styledComponents/feedback/SCDialog";
import { SCDialogTitle } from "../../styledComponents/feedback/SCDialogTitle";
import { SCDialogContent } from "../../styledComponents/feedback/SCDialogContent";
import { SCDialogActions } from "../../styledComponents/feedback/SCDialogActions";
import { SCDialogContentText } from "../../styledComponents/feedback/SCDialogContentText";
import { SCButton } from "../../styledComponents/inputs/SCButton";

export default function NativeDialog(props) {
  const { dialogInitValue, DialogContext } = props;
  const { dialog, setDialog } = useContext(DialogContext);

  return (
    <SCDialog
      open={dialog?.showDialog || false}
      onClose={() => setDialog(dialogInitValue)}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
    >
      {/* @TODO Need to support icon as well  */}
      {/* <Box
        sx={{ paddingTop: 2, display: "flex", justifyContent: "center" }}
        id="dialog-icon"
      >
        {<CheckCircleOutlineIcon sx={{ fontSize: 50 }} />}
      </Box> */}
      <SCDialogTitle
        sx={{ display: "flex", justifyContent: "center" }}
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
            dialog.cancelButton();
            setDialog(dialogInitValue);
          }}
        >
          {dialog?.cancelButtonLabel || "Cancel"}
        </SCButton>
        <SCButton
          onClick={() => {
            dialog.doneButton();
            setDialog(dialogInitValue);
          }}
        >
          {dialog?.doneButtonLabel || "Done"}
        </SCButton>
      </SCDialogActions>
    </SCDialog>
  );
}
