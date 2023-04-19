import React from "react";
import { getLabel } from "../../../utils/stringUtils";
import { CoreClasses } from "@wrappid/styles";
import NativeDivider from "../../dataDisplay/NativeDivider";
import NativeIcon, { __IconTypes } from "../../dataDisplay/NativeIcon";
import NativeTypographyBody1 from "../../dataDisplay/paragraph/NativeTypographyBody1";
import NativeIconButton from "../../inputs/NativeIconButton";
import NativeInputAdornment from "../../inputs/NativeInputAdornment";
import NativeTextField from "../../inputs/NativeTextField";
import NativeBox from "../../layouts/NativeBox";
import NativeStack from "../../layouts/NativeStack";

export default function SortTableData(props) {
  const { tableUUID, tableColumns, auditColumnsKey, order, onRequestSort } =
    props;

  const [searchString, setSearchString] = React.useState(null);
  const [searchedColumns, setSearchedColumns] = React.useState([]);

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
              </NativeInputAdornment>
            ),
          }}
        />
      </NativeBox>
      <NativeBox styleClasses={[CoreClasses.POPOVER.CONTENT]}>
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
              <NativeStack
                direction="row"
                styleClasses={[
                  CoreClasses.WIDTH.W_100,
                  CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN,
                  CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
                ]}
              >
                <NativeStack
                  direction="row"
                  styleClasses={[
                    CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
                    CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
                  ]}
                >
                  <NativeTypographyBody1
                    styleClasses={[CoreClasses.MARGIN.MB0]}
                  >
                    {col?.label || getLabel(col?.id || "Unknown")}&nbsp;
                  </NativeTypographyBody1>
                  {Object.keys(order).includes(col.id) && (
                    <>
                      &nbsp;
                      <NativeIcon
                        icon={
                          order[col.id] === "asc"
                            ? " arrow_drop_up"
                            : "arrow_drop_down"
                        }
                        // type={__IconTypes.FONTAWESOME_V5_SOLID_ICON}
                      />
                    </>
                  )}
                </NativeStack>
                <NativeStack
                  direction="row"
                  styleClasses={[CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}
                >
                  <NativeIconButton
                    onClick={(e) => {
                      onRequestSort(e, col.id, "asc");
                    }}
                  >
                    <NativeIcon
                      icon="fa-sort-amount-up"
                      type={__IconTypes.FONTAWESOME_V5_SOLID_ICON}
                    />
                  </NativeIconButton>
                  <NativeIconButton
                    onClick={(e) => {
                      onRequestSort(e, col.id, "desc");
                    }}
                  >
                    <NativeIcon
                      icon="fa-sort-amount-up-alt"
                      type={__IconTypes.FONTAWESOME_V5_SOLID_ICON}
                    />
                  </NativeIconButton>
                </NativeStack>
              </NativeStack>
            )
          );
        })}
        <NativeDivider />
      </NativeBox>
    </>
  );
}
