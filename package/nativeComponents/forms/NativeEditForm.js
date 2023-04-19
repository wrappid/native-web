import { Formik } from "formik";
import React from "react";
import { useSelector } from "react-redux";
import { getGridSizeProps } from "../../utils/componentUtil";
import { FORM_DATA_TABLE_FUNCTION_MAP } from "../../utils/formDataTableFunctionMap";
import {
  checkDependencies,
  createFieldSkeletonProps,
  createFormActionProps,
  createFormFieldProps,
} from "../../utils/formUtils";
import NativeTypographyBody1 from "../dataDisplay/paragraph/NativeTypographyBody1";
import NativeSkeleton from "../feedback/NativeSkeleton";
import NativeContainedButton from "../inputs/NativeContainedButton";
import NativeInput from "../inputs/NativeInput";
import NativeOutlinedButton from "../inputs/NativeOutlinedButton";
import NativeBox from "../layouts/NativeBox";
import NativeGrid from "../layouts/NativeGrid";
import NativeFormButton from "./NativeFormButton";

export const FormContext = React.createContext();

export default function NativeEditForm(props) {
  const rawForm = useSelector((state) => state.forms.rawForm);
  const rawFormStatus = useSelector((state) => state.forms.rawFormStatus);
  const {
    forms,
    formId,
    handleButtonCLick,
    mode,
    index,
    submitLoading,
    submitSuccess,
    OnEditClick,
    editFormId,
    formRef,
    OnCancelClick,
    formDataReadLoading,
    formData,
    allowEdit,
    onFormFocus,
    preview,
  } = props;
  console.log("Native EDIT FORM DETAILS", forms[formId]?.formElements);

  return formDataReadLoading &&
    formDataReadLoading[formId] &&
    forms[formId].skeletonComp ? (
    React.createElement(forms[formId]?.skeletonComp, {})
  ) : !props.mode && forms[formId]?.renderComp ? (
    React.createElement(forms[formId]?.renderComp, {
      ...props,
      ...(Array.isArray(formData) ? formData[index] : formData),
    })
  ) : rawForm && rawForm[formId] ? (
    <Formik
      enableReinitialize={true}
      initialValues={Array.isArray(formData) ? formData[index] : formData}
      validationSchema={forms[formId]?.formValidationOb}
      onSubmit={props.handleSubmit}
      innerRef={formRef}
    >
      {(formikprops) => (
        <form onSubmit={formikprops.handleSubmit}>
          <NativeGrid NativeId="NativeEditForm">
            {/* Showing Form Elements */}
            {forms[formId]?.formElements?.map((element, elementIndex) =>
              formDataReadLoading && formDataReadLoading[formId] ? (
                <NativeSkeleton
                  {...createFieldSkeletonProps(element)}
                  key={`Native-skeleton-${formId}-${elementIndex}`}
                />
              ) : element.comp &&
                !checkDependencies(element, formikprops)?.hide ? (
                React.createElement(
                  element.comp ? element.comp : NativeInput,
                  {
                    key: `NativeFormElement-${element.id}`,
                    ...createFormFieldProps(element, formikprops, "edit"),
                    NativeId: "NativeFormElement-" + element.id,
                    gridProps: {
                      gridSize: getGridSizeProps(element.gridSize, true),
                    },
                    readOnly: !props.mode || preview || element.readOnly,

                    //data table
                    entity: element.entity
                      ? element.entity
                      : element.getEntity
                      ? FORM_DATA_TABLE_FUNCTION_MAP[element.getEntity](
                          formikprops
                        )
                      : "",
                    //below field are passed on for inline actions
                    fieldActions: forms[formId]?.formActions,
                    inlineAction: forms[formId].inlineAction,
                    handleButtonCLick: handleButtonCLick,
                    submitLoading: submitLoading,
                    submitSuccess: submitSuccess,
                    OnEditClick: OnEditClick,
                    editId: editFormId,
                    allowEdit: allowEdit,

                    onFormFocus: onFormFocus,
                    preview: preview,
                  },
                  element.onlyView ? element.label : null
                )
              ) : null
            )}

            {/* Showing Action Elements. Inline actions are written on input components */}
            {mode && forms[formId] && !forms[formId].inlineAction ? (
              <NativeBox xs={12} {...createFormActionProps(forms[formId])}>
                {forms[formId]?.formActions?.map((actionElement, i) => (
                  <NativeFormButton
                    key={i}
                    element={actionElement}
                    formikprops={formikprops}
                    handleButtonCLick={handleButtonCLick}
                    submitLoading={submitLoading}
                  />
                ))}
                {forms[formId]?.allowCancel !== false && (
                  <NativeOutlinedButton
                    label={
                      forms[formId]?.cancelButtonLabel
                        ? forms[formId].cancelButtonLabel
                        : "Cancel"
                    }
                    disabled={submitLoading || preview}
                    OnClick={OnCancelClick}
                  />
                )}
                {forms[formId]?.allowSubmit !== false && (
                  <NativeContainedButton
                    label={
                      forms[formId]?.submitButtonLabel
                        ? forms[formId].submitButtonLabel
                        : "Save"
                    }
                    disabled={submitLoading || preview}
                    type="submit"
                    OnClick={formikprops.handleSubmit}
                  />
                )}
              </NativeBox>
            ) : null}
          </NativeGrid>
        </form>
      )}
    </Formik>
  ) : (
    rawFormStatus &&
    rawFormStatus[formId] &&
    !rawFormStatus[formId]?.loading && (
      <NativeTypographyBody1>Form Not Found</NativeTypographyBody1>
    )
  );
}
