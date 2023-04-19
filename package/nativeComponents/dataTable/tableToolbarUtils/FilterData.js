import React from "react";
import { getUUID } from "../../../../utils/appUtils";
import { CoreClasses } from "@wrappid/styles";
import NativeIcon from "../../dataDisplay/NativeIcon";
import NativeIconButton from "../../inputs/NativeIconButton";
import { NativeSelect } from "../../inputs/NativeSelect";
import NativeTextButton from "../../inputs/NativeTextButton";
import { NativeTextField } from "../../inputs/NativeTextField";
import NativeBox from "../../layouts/NativeBox";
import NativeGrid from "../../layouts/NativeGrid";

export default function FilterData(props) {
  const { tableUUID, columns } = props;

  const _filterOB = {
    id: getUUID(),
    column: "",
    operator: "",
    value: "",
  };

  const [_filterDatas, set_filterDatas] = React.useState([_filterOB]);

  const handleColumnChange = (event, _filterID) => {
    // setColumn(event.target.value);
  };

  const handleOperatorChange = (event, _filterID) => {
    // setOperator(event.target.value);
  };

  return (
    <NativeBox
      sx={{ minWidth: "40vw" }}
      styleClasses={[CoreClasses.PADDING.P2]}
    >
      {_filterDatas.map((_filterData) => {
        return (
          <>
            <NativeGrid styleClasses={[CoreClasses.LAYOUT.VERTICAL_CENTER]}>
              <NativeIconButton
                gridProps={{ gridSize: 1 }}
                onClick={() => {
                  if (_filterDatas.length > 1) {
                    let _temp = _filterDatas.filter((_fd) => {
                      return _fd.id !== _filterData.id;
                    });
                    set_filterDatas(_temp);
                  }
                }}
              >
                <NativeIcon fontSize="medium" color="primary">
                  highlight_off
                </NativeIcon>
              </NativeIconButton>
              <NativeSelect
                selectID={`column-select-${tableUUID}`}
                gridProps={{ gridSize: 4 }}
                label="Select Column"
                value={_filterData?.columm || ""}
                handleChange={(e) => {
                  handleColumnChange(e, _filterData.id);
                }}
                options={columns}
              />
              <NativeSelect
                selectID={`op-select-${tableUUID}`}
                gridProps={{ gridSize: 3 }}
                label="Select Operator"
                value={_filterData?.columm || ""}
                handleChange={(e) => {
                  handleOperatorChange(e, _filterData.id);
                }}
                options={columns}
              />
              <NativeTextField
                gridProps={{ gridSize: 4 }}
                label={"Value"}
                value={_filterData?.value || ""}
              />
            </NativeGrid>
          </>
        );
      })}
      <NativeBox
        styleClasses={[
          CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN,
          CoreClasses.PADDING.PT2,
        ]}
      >
        <NativeTextButton
          label={
            <>
              <NativeIcon>add</NativeIcon>&nbsp;Add Filter
            </>
          }
          OnClick={() => {
            set_filterDatas([..._filterDatas, _filterOB]);
          }}
        />
        <NativeTextButton
          label={
            <>
              <NativeIcon>sync</NativeIcon>&nbsp;Apply
            </>
          }
        />
      </NativeBox>
    </NativeBox>
  );
}
