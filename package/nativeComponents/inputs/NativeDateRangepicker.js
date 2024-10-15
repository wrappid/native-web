// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
// eslint-disable-next-line import/no-unresolved
import { UtilityClasses } from "@wrappid/styles";
import moment from "moment";

import NativeFormHelperText from "./NativeFormHelperText";
import NativeTextField from "./NativeTextField";
import { SCDatePicker } from "../../styledComponents/inputs/SCDatePicker";
import NativeBox from "../layouts/NativeBox";
import NativeStack from "../layouts/NativeStack";

export default function NativeDateTimeRangePicker(props) {
  const { value, formik } = props;
  let spValue = {
    endDate:
      value && value.endDate
        ? typeof value.endDate === "string"
          ? moment(value.endDate)
          : value.endDate
        : "",
    startDate:
      value && value.startDate
        ? typeof value.startDate === "string"
          ? moment(value.startDate)
          : value.startDate
        : "",
  };

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <NativeStack direction="row" spacing={3} >
        <NativeBox>
          <SCDatePicker
            id={props.id}
            name={props.id}
            label={"Start Date"}
            inputFormat="DD/MM/YYYY"
            value={spValue?.startDate}
            onChange={(val) => {
              formik.setFieldValue(props.id, {
                ...value,
                startDate: moment(val).format("YYYY-MM-DD"),
              });
            }}
            error={
              props.touched && props.error && props.error.length > 0 ? true : false
            }
            renderInput={(params) => (
              <NativeTextField
                helperText={
                  props.touched && props.error && props.error.length > 0
                    ? props.error
                    : ""
                }
                {...params}
              />
            )}
          />
        </NativeBox>

        <NativeBox styleClasses={[UtilityClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}>-</NativeBox>

        <NativeBox>

          <SCDatePicker
            id={props.id}
            name={props.id}
            label={"End Date"}
            inputFormat="DD/MM/YYYY"
            value={spValue?.endDate}
            onChange={(val) => {
              formik.setFieldValue(props.id, {
                ...value,
                endDate: moment(val).format("YYYY-MM-DD"),
              });
            }}
            error={
              props.touched && props.error && props.error.length > 0 ? true : false
            }
            renderInput={(params) => (
              <NativeTextField
                helperText={
                  props.touched && props.error && props.error.length > 0
                    ? props.error
                    : ""
                }
                {...params}
              />
            )}
          />

          <NativeFormHelperText styleClasses={[UtilityClasses.MARGIN.P0]}>
            {props.helperText}
          </NativeFormHelperText>

        </NativeBox>
      </NativeStack> 
    </LocalizationProvider>
  );
}