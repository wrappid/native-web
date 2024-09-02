// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
// eslint-disable-next-line import/no-unresolved
import { UtilityClasses } from "@wrappid/styles";
import moment from "moment";

import NativeFormHelperText from "./NativeFormHelperText";
import NativeTextField from "./NativeTextField";
import { SCDateTimePicker } from "../../styledComponents/inputs/SCDateTimePicker";
import NativeBox from "../layouts/NativeBox";
import NativeStack from "../layouts/NativeStack";

export default function NativeDateTimeRangePicker(props) {
  const { label, value } = props;
  const [startDateTime, setStartDateTime] = React.useState(props?.value || "");
  const [endDateTime, setEndDateTime] = React.useState(props?.value || "");
  const onChangeStartDateTime = (value) => {
    props?.onChange && props.onChange(value);
    setStartDateTime(value);
  };
  const onChangeEndDateTime = (value) => {
    props?.onChange && props.onChange(value);
    setEndDateTime(value);
  };
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
          <SCDateTimePicker
            id={props.id}
            name={props.id}
            label={label}
            inputFormat="DD/MM/YYYY hh:mm"
            value={spValue?.startDate ? String(spValue.endDate) : startDateTime}
            onChange={onChangeStartDateTime}
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

          {props?.helperText?.end && (
            <NativeFormHelperText styleClasses={[UtilityClasses.MARGIN.M0]}>
              {props?.helperText?.end}
            </NativeFormHelperText>
          )}
        </NativeBox>

        <NativeBox styleClasses={[UtilityClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}>-</NativeBox>

        <NativeBox>
          <SCDateTimePicker
            id={props.id}
            name={props.id}
            label={label}
            inputFormat="DD/MM/YYYY hh:mm"
            value={spValue?.endDate ? String(spValue.endDate) : endDateTime}
            onChange={onChangeEndDateTime}
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
