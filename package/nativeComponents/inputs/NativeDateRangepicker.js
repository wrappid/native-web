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

export default function NativeDateRangepicker(props) {
  const [startDate, setStartDate] = React.useState(props?.value || "");
  const [endDate, setEndDate] = React.useState(props?.value || "");
  const onChangeStartDate = (value) => {
    props?.onChange && props.onChange(value);
    setStartDate(value);
  };
  const onChangeEndDate = (value) => {
    props?.onChange && props.onChange(value);
    setEndDate(value);
  };
  const { /* id, onChange,  */label, value } = props;
  let spValue = {
    endDate:
      value && value.endDate
        ? typeof value.endDate === "string" && value.endDate.includes(":")
          ? moment(value.endDate)
          : value.endDate
        : "",
    startDate:
      value && value.startDate
        ? typeof value.startDate === "string" && value.startDate.includes(":")
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
            label={label}
            inputFormat="DD/MM/YYYY"
            value={spValue?.startDate ? String(spValue.startDate) : startDate}
            onChange={onChangeStartDate}
            helperText={props?.helperText?.start ? String(props?.helperText.start) : startDate}
            fullWidth={true}
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
                InputLabelProps={{ ...params.InputLabelProps, shrink: true }} 
                fullWidth={true}
              />
            )}
          />

          {props?.helperText?.start && (
            <NativeFormHelperText styleClasses={[UtilityClasses.MARGIN.M0]}>
              {props?.helperText?.start}
            </NativeFormHelperText>
          )}
        </NativeBox>

        <NativeBox styleClasses={[UtilityClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}>-</NativeBox>

        <NativeBox>
          <SCDatePicker
            label={label}
            inputFormat="DD/MM/YYYY"
            value={spValue?.endDate ? String(spValue.endDate) : endDate}
            onChange={onChangeEndDate}
            helperText={props?.helperText?.end ? String(props?.helperText.end) : "endDate" }
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
                InputLabelProps={{ shrink: true }} 
                fullWidth={true}
              />
            )}
          />

          {props?.helperText?.end && (
            <NativeFormHelperText styleClasses={[UtilityClasses.MARGIN.M0]}>
              {props?.helperText?.end}
            </NativeFormHelperText>
          )}
        </NativeBox>
      </NativeStack> 
    </LocalizationProvider>
  );
}
