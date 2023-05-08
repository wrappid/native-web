import React from "react";
import NativeFormHelperText from "./NativeFormHelperText";
import { UtilityClasses } from "@wrappid/styles";
import NativeBox from "../layouts/NativeBox";
import NativeLabel from "../dataDisplay/paragraph/NativeLabel";
import NativeGrid from "../layouts/NativeGrid";
import moment from "moment";
import NativeIconButton from "./NativeIconButton";
import NativeIcon from "../dataDisplay/NativeIcon";
import NativeTimePicker from "./NativeTimePicker";

export default function NativeMultiTimeRangePicker(props) {
  const { id, label, onChange, value, formik, ampm } = props;
  const [timeRanges, setTimeRanges] = React.useState([
    {
      startTime: null,
      endTime: null,
    },
  ]);

  // console.log("Timeranges", timeRanges, value);

  React.useEffect(() => {
    if (value && Array.isArray(value)) {
      setTimeRanges(value);
    }
  }, []);

  const addRange = () => {
    var x = [...timeRanges];
    x.push({
      startTime: null,
      endTime: null,
    });
    console.log();
    setTimeRanges(x);
  };

  const deleteRange = (i) => {
    var x = [...timeRanges];
    let y = x.slice(0, i).concat(x.slice(i + 1));
    setTimeRanges(y);
  };

  const _handleChange = (i, v, type) => {
    var x = [...timeRanges];
    x[i][type] = v.format("LLL");
    formik.setFieldValue(props.id, x);
  };

  // console.log("END VALUE", id, spValue, value);

  return (
    <NativeBox>
      <NativeLabel>{label}</NativeLabel>
      {timeRanges.map((timeRange, i) => (
        <NativeGrid>
          <NativeTimePicker
            readOnly={props.readOnly}
            gridProps={{
              gridSize: 5,
            }}
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
            gridProps={{
              gridSize: 5,
            }}
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
              gridProps={{
                gridSize: 2,
              }}
              onClick={addRange}
            >
              <NativeIcon>add</NativeIcon>
            </NativeIconButton>
          ) : (
            <NativeIconButton
              gridProps={{
                gridSize: 2,
              }}
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
