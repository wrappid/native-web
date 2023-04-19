import React from "react";
import { useDispatch } from "react-redux";
import {
  HTTP_POST,
  tableToolbar,
  userSettingsConstants,
} from "../../config/constants";
import {
  UPDATE_QUERY_MAXROWINPAGE_DATA,
  UPDATE_QUERY_PAGE_DATA,
} from "../../store/types/dataManagementTypes";
import { getLabel } from "../../utils/stringUtils";
import {
  getTableDensityIconName,
  __TableLeftPanelGridSize,
  __TableRightPanelGridSize,
} from "../../utils/tableUtils";
import { CoreClasses } from "@wrappid/styles";
import NativeDivider from "../dataDisplay/NativeDivider";
import NativeIcon, { __IconTypes } from "../dataDisplay/NativeIcon";
import NativeTablePagination from "../dataDisplay/NativeTablePagination";
import NativeTooltip from "../dataDisplay/NativeTooltip";
import NativeButton from "../inputs/NativeButton";
import NativeIconButton from "../inputs/NativeIconButton";
import NativeInputAdornment from "../inputs/NativeInputAdornment";
import NativeTextField from "../inputs/NativeTextField";
import NativeGrid from "../layouts/NativeGrid";
import NativeStack from "../layouts/NativeStack";
import NativePopover from "../utils/NativePopover";
import ExportData from "./tableToolbarUtils/ExportData";
import SortTableData from "./tableToolbarUtils/SortTableData";
import TableDensity from "./tableToolbarUtils/TableDensity";
import { apiRequestAction } from "./../../store/action/appActions";
import { UPDATE_USER_SETTINGS } from "../../config/api";
import {
  USER_SETTINGS_UPDATE_ERROR,
  USER_SETTINGS_UPDATE_SUCCESS,
} from "../../store/types/settingsTypes";

export default function NativeDataTableToolbar(props) {
  const dispatch = useDispatch();
  const {
    tableUUID,
    tableColumns,
    // table density
    tableDensity,
    setTableDensity,
    // table columns filter
    // filteredColumns,
    // setFilteredColumns,
    // audit columns data
    auditColumnsKey = [],
    // showAuditColumns,
    // setShowAuditColumns,
    // sortable
    sortable,
    order,
    onRequestSort,
    selectable = true,
    selected = [],
    searchable = true,
    searchValue = "",
    setSearchValue,
    filterData,
    clearFilterData,
    // enableColumnFilter,
    enableTableDensity,
    enableExport,
    enableSorting,
    enableCreateEntity,
    createEntityButtonText,
    // _showDetailsPane,
    set_showDetailsPane,
    setDetailedRowId,
    setDetailedRowData,
    // --------------------------------------
    // pagination props
    data,
    page,
    maxRowInPage,
    setPage,
    setMaxRowInPage,
  } = props;

  // const [_selectAllColumnFilter, set_selectAllColumnFilter] = React.useState(true);

  const [_toolbarPopOverAnchorEl, set_toolbarPopOverAnchorEl] =
    React.useState(null);
  const _toolbarPopoverOpen = Boolean(_toolbarPopOverAnchorEl);
  const _toolbarID = _toolbarPopoverOpen
    ? "toolbar-popover-" + tableUUID
    : undefined;
  const [_toolbarContent, set_toolbarContent] = React.useState(null);

  /**
   * show/hide column func
   */
  // const showAllColumns = () => {
  //   setFilteredColumns(
  //     tableColumns
  //       .filter((_tc) => !auditColumnsKey.includes(_tc.id))
  //       .map((_tc) => {
  //         return _tc.id;
  //       }),
  //   );
  // };
  // const hideAllColumns = () => {
  //   setFilteredColumns([]);
  // };
  // handle trigger on each column checkbox
  // const handleColumnFilter = (e, col) => {
  //   let hidden = e.target.checked ? false : true;
  //   let _temp_filteredColumns = [...filteredColumns];
  //   if (hidden) {
  //     // hide column
  //     // remove column from filtered columns
  //     _temp_filteredColumns = _temp_filteredColumns.filter((_temp_col) => _temp_col !== col.id);
  //   } else {
  //     // show column
  //     // add column to filtered columns
  //     _temp_filteredColumns.push(col.id);
  //   }
  //   setFilteredColumns(_temp_filteredColumns);
  // };

  return (
    <>
      <NativeGrid
        styleClasses={[
          props.styleClasses,
          CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN,
          CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
          // CoreClasses.PADDING.PL1,
          // CoreClasses.MARGIN.MT0,
          // CoreClasses.MARGIN.MB1,
        ]}
      >
        {searchable && (
          <NativeTextField
            gridProps={{ gridSize: { md: __TableLeftPanelGridSize } }}
            styleClasses={[CoreClasses.MARGIN.MB0]}
            value={searchValue}
            onKeyDown={(e) => {
              e.keyCode === 13 && filterData();
            }}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            InputProps={{
              endAdornment: (
                <NativeInputAdornment
                  position="end"
                  styleClasses={
                    [
                      // CoreClasses.PADDING.PR1,
                      // CoreClasses.PADDING.PB1,
                    ]
                  }
                >
                  {searchValue &&
                    // searchValue !== "" &&
                    searchValue.length > 0 && (
                      <NativeIconButton
                        title="Clear search"
                        onClick={() => {
                          console.log("clear search clicked");
                          setSearchValue("");
                          clearFilterData();
                        }}
                      >
                        <NativeIcon
                          type={__IconTypes.MATERIAL_OUTLINED_ICON}
                          icon={"clear"}
                        />
                      </NativeIconButton>
                    )}
                  <NativeIconButton
                    title="Search"
                    onClick={() => {
                      console.log("search clicked");
                      filterData();
                    }}
                  >
                    <NativeIcon>search</NativeIcon>
                  </NativeIconButton>
                  <NativeIconButton
                    title="Advanced Search"
                    onClick={() => {
                      console.log("Advanced Search Clicked");
                      // filterData();
                    }}
                  >
                    <NativeIcon>tune</NativeIcon>
                  </NativeIconButton>
                </NativeInputAdornment>
              ),
            }}
          />
        )}

        <NativeStack
          direction="row"
          gridProps={{ gridSize: { md: __TableRightPanelGridSize } }}
          styleClasses={[
            CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN,
            CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
          ]}
        >
          <NativeStack
            direction="row"
            styleClasses={[CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}
          >
            <NativeDivider
              orientation="vertical"
              flexItem={true}
              styleClasses={[
                CoreClasses.DISPLAY.NONE,
                CoreClasses.DISPLAY.MD.BLOCK,
                CoreClasses.MARGIN.MY0,
              ]}
            />

            <NativeIconButton
              title={"Refresh Data"}
              onClick={(e) => {
                filterData();
              }}
            >
              <NativeIcon>refresh</NativeIcon>
            </NativeIconButton>
            <NativeIconButton
              title={"Sorting"}
              onClick={(e) => {
                console.log("Sort data clicked");
                set_toolbarContent(tableToolbar.SORT_DATA);
                set_toolbarPopOverAnchorEl(e.currentTarget);
              }}
            >
              <NativeIcon>sort </NativeIcon>
            </NativeIconButton>
            {/* NOT NEEDED ANY MORE AS OF NOW */}
            {/* {!_showDetailsPane && enableColumnFilter && (
              <NativeIconButton
                title="Filter Columns"
                onClick={(e) => {
                  console.log("FILTER_COLUMN clicked");
                  set_toolbarContent(tableToolbar.FILTER_COLUMN);
                  set_toolbarPopOverAnchorEl(e.currentTarget);
                }}
              >
                <NativeIcon>view_column</NativeIcon>
              </NativeIconButton>
            )} */}
            {/* {enableDataFilter && searchable && (
              <NativeIconButton
                
                label="Filters"
                onClick={(e) => {
                  set_toolbarContent(tableToolbar.FILTER_DATA);
                  set_toolbarPopOverAnchorEl(e.currentTarget);
                }}
              >
                <NativeIcon>filter_list</NativeIcon>
              </NativeIconButton>
            )} */}
            {/* {enableTableDensity && (
              <NativeIconButton
                title="Table Density"
                onClick={(e) => {
                  set_toolbarContent(tableToolbar.TABLE_DENSITY);
                  set_toolbarPopOverAnchorEl(e.currentTarget);
                }}
              >
                <NativeIcon>{getTableDensityIconName(tableDensity)}</NativeIcon>
              </NativeIconButton>
            )} */}
            {enableExport && (
              <NativeIconButton
                title="Export"
                onClick={(e) => {
                  set_toolbarContent(tableToolbar.EXPORT_DATA);
                  set_toolbarPopOverAnchorEl(e.currentTarget);
                }}
              >
                <NativeIcon
                  type={__IconTypes.MATERIAL_ICON}
                  icon={"save_alt"}
                />
              </NativeIconButton>
            )}
            {/* {_showDetailsPane && (
              <NativeIconButton
                onClick={() => {
                  set_showDetailsPane(!_showDetailsPane);
                }}
              >
                <NativeIcon color={_showDetailsPane ? "primary" : "secondary"}>
                  info
                </NativeIcon>
              </NativeIconButton>
            )} */}
            <NativeIconButton title={"More Actions"}>
              <NativeIcon>more_vert</NativeIcon>
            </NativeIconButton>
          </NativeStack>
          <NativeStack
            direction="row"
            styleClasses={[CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}
          >
            {enableCreateEntity && (
              <NativeButton
                size="small"
                label={`${createEntityButtonText || getLabel(tableUUID)}`}
                variant="outlined"
                startIcon={<NativeIcon>add</NativeIcon>}
                OnClick={(e) => {
                  setDetailedRowId(null);
                  setDetailedRowData(null);
                  set_showDetailsPane(true);
                }}
              />
            )}
            <NativeDivider
              flexItem={true}
              orientation="vertical"
              styleClasses={[
                CoreClasses.DISPLAY.NONE,
                CoreClasses.DISPLAY.SM.BLOCK,
                CoreClasses.MARGIN.MY1,
              ]}
            />
            <NativeTablePagination
              styleClasses={[
                CoreClasses.DISPLAY.NONE,
                CoreClasses.DISPLAY.SM.BLOCK,
              ]}
              // showFirstButton
              // showLastButton
              count={data?.totalRecords || 0}
              page={page}
              rowsPerPage={maxRowInPage}
              onPageChange={(event, newPage) => {
                console.log("Change page", newPage);
                setPage(newPage);
                dispatch({
                  type: UPDATE_QUERY_PAGE_DATA,
                  payload: { entity: tableUUID, page: newPage },
                });
              }}
              onRowsPerPageChange={(event) => {
                console.log("Change max row in page ", event.target.value);
                if (event.target.value !== maxRowInPage) {
                  setMaxRowInPage(event.target.value);
                  dispatch({
                    type: UPDATE_QUERY_MAXROWINPAGE_DATA,
                    payload: {
                      entity: tableUUID,
                      maxRowInPage: event.target.value,
                    },
                  });
                  dispatch(
                    apiRequestAction(
                      HTTP_POST,
                      UPDATE_USER_SETTINGS,
                      true,
                      {
                        name: userSettingsConstants.MAX_ROWS_IN_PAGE,
                        value: event.target.value,
                      },
                      USER_SETTINGS_UPDATE_SUCCESS,
                      USER_SETTINGS_UPDATE_ERROR
                    )
                  );
                }
              }}
            />
          </NativeStack>
        </NativeStack>
        <NativeTablePagination
          gridProps={{
            gridSize: { md: __TableRightPanelGridSize },
            styleClasses: [
              CoreClasses.DISPLAY.BLOCK,
              CoreClasses.DISPLAY.SM.NONE,
            ],
          }}
          styleClasses={[
            // CoreClasses.DISPLAY.BLOCK,
            // CoreClasses.DISPLAY.SM.NONE,
            CoreClasses.ALIGNMENT.ALIGN_SELF_CENTER,
          ]}
          // showFirstButton
          // showLastButton
          count={data?.totalRecords || 0}
          page={page}
          rowsPerPage={maxRowInPage}
          onPageChange={(event, newPage) => {
            console.log("Change page", newPage);
            setPage(newPage);
            dispatch({
              type: UPDATE_QUERY_PAGE_DATA,
              payload: { entity: tableUUID, page: newPage },
            });
          }}
          onRowsPerPageChange={(event) => {
            console.log("Change max row in page ", event.target.value);
            if (event.target.value !== maxRowInPage) {
              setMaxRowInPage(event.target.value);
              dispatch({
                type: UPDATE_QUERY_MAXROWINPAGE_DATA,
                payload: {
                  entity: tableUUID,
                  maxRowInPage: event.target.value,
                },
              });
              dispatch(
                apiRequestAction(
                  HTTP_POST,
                  UPDATE_USER_SETTINGS,
                  true,
                  {
                    name: userSettingsConstants.MAX_ROWS_IN_PAGE,
                    value: event.target.value,
                  },
                  USER_SETTINGS_UPDATE_SUCCESS,
                  USER_SETTINGS_UPDATE_ERROR
                )
              );
            }
          }}
        />
      </NativeGrid>
      <NativePopover
        id={_toolbarID}
        open={_toolbarPopoverOpen}
        anchorEl={_toolbarPopOverAnchorEl}
        onClose={() => {
          set_toolbarPopOverAnchorEl(null);
          set_toolbarContent(null);
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        {
          /* {enableColumnFilter && 
          _toolbarContent === tableToolbar.FILTER_COLUMN ? (
            <>
              <FilterColumn
                tableUUID={tableUUID}
                showAllColumns={showAllColumns}
                hideAllColumns={hideAllColumns}
                tableColumns={tableColumns}
                filteredColumns={filteredColumns}
                auditColumnsKey={auditColumnsKey}
                handleColumnFilter={handleColumnFilter}
                showAuditColumns={showAuditColumns}
                setShowAuditColumns={setShowAuditColumns}
              />
            </>
          ) : enableDataFilter &&
            searchable &&
            _toolbarContent === tableToolbar.FILTER_DATA ? (
            <FilterData columns={tableColumns} />
          ) :  */ enableTableDensity &&
          _toolbarContent === tableToolbar.TABLE_DENSITY ? (
            <TableDensity
              tableDensity={tableDensity}
              setTableDensity={setTableDensity}
            />
          ) : enableExport && _toolbarContent === tableToolbar.EXPORT_DATA ? (
            <ExportData />
          ) : enableSorting && _toolbarContent === tableToolbar.SORT_DATA ? (
            <SortTableData
              tableUUID={tableUUID}
              tableColumns={tableColumns}
              // filteredColumns={filteredColumns}
              auditColumnsKey={auditColumnsKey}
              sortable={sortable}
              order={order}
              onRequestSort={onRequestSort}
            />
          ) : (
            <></>
          )
        }
      </NativePopover>

      {selectable && selected && selected.length > 0 && (
        <NativeTooltip title="Delete">
          <NativeIconButton>
            <NativeIcon>delete</NativeIcon>
          </NativeIconButton>
        </NativeTooltip>
      )}
    </>
  );
}
