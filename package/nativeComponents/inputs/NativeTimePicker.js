// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";

import NativeTextField from "./NativeTextField";
import { SCTimePicker } from "../../styledComponents/inputs/SCTimePicker";

export default function NativeTimePicker(props) {
  const {
    id,
    name,
    label,
    onChange,
    value,
    formik,
    ampm = true,
    disablePast,
    disableFuture,
    touched,
    error,
    shouldDisableTime,
    minTime,
    maxTime,
  } = props;

  /**
   * Convert UTC time from backend to local time for display
   * 
   * @param val - string format 2024-11-19T14:00:00.000Z
   * @return local moment
   */
  function convertToLocale(val) {
    try {
      
      // expecting format 2024-11-19T14:00:00.000Z
      if (!val || !moment(val, moment.ISO_8601, true).isValid()) {
        return null;
      }
    
      const date = new Date(val);

      return moment(date);
  
      /*  else if (typeof val === "string" && val.includes(":")) {
        // Handle time strings like "14:00:00" or "14:00"
        const timeParts = val.split(":");
        const hours = parseInt(timeParts[0], 10);
        const minutes = parseInt(timeParts[1], 10);
      
        // Create moment object in UTC with current date
        const utcTime = moment.utc().hours(hours).minutes(minutes);
      
        // Convert to local time
        return utcTime.local();
      } */
    } catch (error) {
      return null;
    }
  }

  // Convert local time to UTC for sending to backend
  function convertToUTC(val) {
    if(moment.isMoment(val)) {
      return moment(val).utc().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");
    }
    return null;
  }

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <SCTimePicker
        id={id}
        name={name}
        label={label}
        inputFormat={ampm ? "hh:mm" : "HH:mm"}
        ampm={ampm}
        minTime={ typeof minTime === "string" ? convertToLocale(minTime) : minTime}
        maxTime={ typeof maxTime === "string" ? convertToLocale(maxTime) : maxTime}
        disablePast={disablePast}
        disableFuture={disableFuture}
        shouldDisableTime={shouldDisableTime}
        value={convertToLocale(value)}
        onChange={(val) => {
          let utcValue = convertToUTC(val);
          
          if (formik) {
            formik.setFieldValue(id, utcValue);
          } else if (onChange) {
            onChange(utcValue);
          }
        }}
        error={touched && error && error.length > 0 ? true : false}
        fullWidth={true}
        renderInput={(params) => (
          <NativeTextField
            {...params}
            error=""
            fullWidth={true}
          />
        )}
      />
    </LocalizationProvider>
  );
}