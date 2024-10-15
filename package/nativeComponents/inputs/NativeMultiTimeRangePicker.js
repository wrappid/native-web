/* eslint-disable id-length */
// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { UtilityClasses } from "@wrappid/styles";
import moment from "moment";

import NativeFormHelperText from "./NativeFormHelperText";
import NativeIconButton from "./NativeIconButton";
import NativeTimePicker from "./NativeTimePicker";
import NativeIcon from "../dataDisplay/NativeIcon";
import NativeLabel from "../dataDisplay/paragraph/NativeLabel";
import NativeBox from "../layouts/NativeBox";
import NativeGrid from "../layouts/NativeGrid";

export default function NativeMultiTimeRangePicker(props) {
  const {
    // eslint-disable-next-line no-unused-vars
    id, label, onChange, value, formik, ampm 
  } = props;
  const [timeRanges, setTimeRanges] = React.useState([
    {
      endTime  : null,
      startTime: null,
    },
  ]);

  React.useEffect(() => {
    if (value && Array.isArray(value)) {
      setTimeRanges(value);
    }
  }, []);

  const addRange = () => {
    let x = [...timeRanges];

    x.push({
      endTime  : null,
      startTime: null,
    });
    // eslint-disable-next-line no-console
    console.log();
    setTimeRanges(x);
  };

  const deleteRange = (i) => {
    let x = [...timeRanges];
    let y = x.slice(0, i).concat(x.slice(i + 1));

    setTimeRanges(y);
  };

  const _handleChange = (i, v, type) => {
    let x = [...timeRanges];

    x[i][type] = v.format("LLL");
    formik.setFieldValue(props.id, x);
  };

  return (
    <NativeBox>
      <NativeLabel>{label}</NativeLabel>

      {timeRanges.map((timeRange, i) => (
        <NativeGrid key={i}>
          <NativeTimePicker
            readOnly={props.readOnly}
            gridProps={{ gridSize: 5 }}
            label={props.startTimeLabel ? props.startTimeLabel : "Start Time"}
            inputFormat={props.ampm ? "hh:mm" : "HH:MM"}
            ampm={props.ampm ? true : false}
            value={timeRange.startTime ? moment(timeRange.startTime) : null}
            onChange={(v) => {
              _handleChange(i, v, "startTime");
            }}
            touched={props.touched}
            error={props.error}
          />

          <NativeTimePicker
            readOnly={props.readOnly}
            gridProps={{ gridSize: 5 }}
            label={props.endTimeLabel ? props.endTimeLabel : "End Time"}
            inputFormat={props.ampm ? "hh:mm" : "HH:MM"}
            ampm={props.ampm ? true : false}
            value={timeRange.endTime ? moment(timeRange.endTime) : null}
            onChange={(v) => {
              _handleChange(i, v, "endTime");
            }}
            touched={props.touched}
            error={props.error}
          />

          {i < 1 ? (
            <NativeIconButton
              gridProps={{ gridSize: 2 }}
              onClick={addRange}
            >
              <NativeIcon>add</NativeIcon>
            </NativeIconButton>
          ) : (
            <NativeIconButton
              gridProps={{ gridSize: 2 }}
              onClick={() => {
                deleteRange(i);
              }}
            >
              <NativeIcon>delete_outline</NativeIcon>
            </NativeIconButton>
          )}
        </NativeGrid>
      ))}

      <NativeFormHelperText styleClasses={[UtilityClasses.LAYOUT.NO_MARGIN_P]}>
        {props.helperText}
      </NativeFormHelperText>
    </NativeBox>
  );
}