// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { UtilityClasses, StyledComponentsClasses } from "@wrappid/styles";
import { useDispatch, useSelector } from "react-redux";

import { SCModal } from "../../styledComponents/utils/SCModal";
import NativeH6 from "../dataDisplay/heading/NativeH6";
import NativeIcon, { __IconTypes } from "../dataDisplay/NativeIcon";
import NativeIconButton from "../inputs/NativeIconButton";
import NativeBox from "../layouts/NativeBox";

export default function NativeModal(props) {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.modal.modalOpen);
  const modalData = useSelector((state) => state.modal.modalData);
  const modalStyle = useSelector((state) => state.modal.modalStyle);
  const modalClose = useSelector((state) => state.modal.modalClose);
  const HandleModalClose = () => {
    dispatch(props.toggleModalState(null));
  };

  return (
    <SCModal
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      open={open}
      onClose={modalClose}
      // {...props}
    >
      <NativeBox
        sx={{ bgcolor: "background.paper" }}
        styleClasses={
          props.containerStyle
            ? [StyledComponentsClasses.MODAL.MODAL_CONTAINER, ...(modalStyle?.containerStyle || [])]
            : [StyledComponentsClasses.MODAL.MODAL_CONTAINER]
        }
      >
        <NativeBox
          styleClasses={
            props.headerStyle
              ? [StyledComponentsClasses.MODAL.MODAL_HEADER, UtilityClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN, ...(modalStyle?.headerStyle || [])]
              : [StyledComponentsClasses.MODAL.MODAL_HEADER, UtilityClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN]
          }
          id="modal-modal-title"
        >
          <NativeBox>
            {<NativeH6>{modalData?.heading ? modalData.heading : ""}</NativeH6>}
          </NativeBox>

          <NativeIconButton onClick={HandleModalClose}>
            <NativeIcon type={__IconTypes.MATERIAL_ICON} name="close" childrenFlag={true}/>
          </NativeIconButton>
        </NativeBox>

        <NativeBox
          styleClasses={
            props.bodyStyle
              ? [StyledComponentsClasses.MODAL.MODAL_BODY, ...(modalStyle?.bodyStyle || [])]
              : [StyledComponentsClasses.MODAL.MODAL_BODY]
          }
          id="modal-modal-description"
        >
          {React.isValidElement(modalData?.comp) ? modalData?.comp : null}
        </NativeBox>
      </NativeBox>
    </SCModal>
  );
}
