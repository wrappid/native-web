import React from "react";
import { getLabel } from "../../../../utils/stringUtils";
import { CoreClasses } from "@wrappid/styles";
import NativeDivider from "../../dataDisplay/NativeDivider";
import NativeIcon from "../../dataDisplay/NativeIcon";
import NativeFormControlLabel from "../../inputs/NativeFormControlLabel";
import NativeCheckbox from "../../inputs/NativeCheckbox";
import NativeIconButton from "../../inputs/NativeIconButton";
import NativeInputAdornment from "../../inputs/NativeInputAdornment";
import { NativeTextField } from "../../inputs/NativeTextField";
import NativeBox from "../../layouts/NativeBox";
import NativeStack from "../../layouts/NativeStack";

export default function FilterColumn(props) {
  const {
    tableUUID,
    showAllColumns,
    hideAllColumns,
    tableColumns,
    filteredColumns,
    auditColumnsKey,
    handleColumnFilter,
    showAuditColumns,
    setShowAuditColumns,
  } = props;

  const [searchString, setSearchString] = React.useState(null);
  const [searchedColumns, setSearchedColumns] = React.useState([]);
  const [_selectAllColumn, set_selectAllColumn] = React.useState(true);

  React.useEffect(() => {
    if (searchString) {
      let tmpSearchString = searchString?.toLocaleLowerCase();
      console.log("########################");
      console.log(`Searched Column String: ${searchString}`);
      console.log(
        `Searched Column String: ${tableColumns?.filter((tblCol) => {
          return (
            !auditColumnsKey.includes(tblCol?.id?.toLocaleLowerCase()) &&
            (tblCol?.label?.toLocaleLowerCase().includes(tmpSearchString) ||
              getLabel(tblCol?.id)
                ?.toLocaleLowerCase()
                .includes(tmpSearchString))
          );
        })}`
      );
      console.log("########################");
      setSearchedColumns(
        tableColumns?.filter((tblCol) => {
          return (
            !auditColumnsKey.includes(tblCol?.id?.toLocaleLowerCase()) &&
            (tblCol?.label?.toLocaleLowerCase().includes(tmpSearchString) ||
              getLabel(tblCol?.id)
                ?.toLocaleLowerCase()
                .includes(tmpSearchString))
          );
        })
      );
    } else {
    }
  }, [searchString]);

  React.useEffect(() => {
    if (
      tableColumns.length ===
      auditColumnsKey.length + filteredColumns.length
    ) {
      set_selectAllColumn(true);
    } else {
      set_selectAllColumn(false);
    }
  }, [tableColumns, filteredColumns, auditColumnsKey]);

  return (
    <>
      <NativeBox styleClasses={[CoreClasses.POPOVER.HEADER]}>
        <NativeTextField
          styleClasses={[CoreClasses.MARGIN.MB0]}
          // label="Find column"
          placeholder="Search column"
          value={searchString}
          onChange={(e) => {
            setSearchString(e.target.value);
          }}
          InputProps={{
            endAdornment: (
              <NativeInputAdornment position="end" styleClasses={[]}>
                {searchString && searchString?.length > 0 && (
                  <NativeIconButton
                    title={"Clear Search"}
                    onClick={() => {
                      setSearchString("");
                    }}
                  >
                    <NativeIcon>clear</NativeIcon>
                  </NativeIconButton>
                )}
                <NativeIconButton title={"Hide all"} onClick={hideAllColumns}>
                  <NativeIcon>playlist_remove</NativeIcon>
                </NativeIconButton>
                <NativeIconButton title={"Show all"} onClick={showAllColumns}>
                  <NativeIcon>playlist_add_check</NativeIcon>
                </NativeIconButton>
              </NativeInputAdornment>
            ),
          }}
        />
        {/* <NativeStack direction="column">
          <NativeFormControlLabel
            control={
              <NativeCheckbox
                onChange={(e) => {
                  setShowAuditColumns(!showAuditColumns);
                }}
                checked={showAuditColumns}
              />
            }
            label={"Audit Data"}
          />
        </NativeStack> */}
      </NativeBox>
      <NativeBox styleClasses={[CoreClasses.POPOVER.CONTENT]}>
        <NativeStack direction="column">
          {(searchString &&
          searchString.length > 0 &&
          searchedColumns &&
          searchedColumns?.length > 0
            ? searchedColumns
            : tableColumns?.filter(
                (tblCol) => !auditColumnsKey.includes(tblCol.id)
              )
          )?.map((col) => {
            return (
              !auditColumnsKey.includes(col.id) && (
                <NativeFormControlLabel
                  control={
                    <NativeCheckbox
                      onChange={(e) => {
                        handleColumnFilter(e, col);
                      }}
                      checked={filteredColumns.includes(col.id)}
                    />
                  }
                  label={col.label}
                />
              )
            );
          })}
        </NativeStack>
      </NativeBox>
    </>
  );
}
