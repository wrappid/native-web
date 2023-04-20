import * as React from "react";
import PropTypes from "prop-types";
import TableBulkAction from "./NativeTableBulkAction";
import NativeTypographyBody1 from "../dataDisplay/paragraph/NativeTypographyBody1";
import NativeBox from "../layouts/NativeBox";
import NativeIconButton from "../inputs/NativeIconButton";
import NativeCheckbox from "../inputs/NativeCheckbox";
import NativePopover from "../utils/NativePopover";
import NativeFormGroup from "../inputs/NativeFormGroup";
import NativeFormControlLabel from "../inputs/NativeFormControlLabel";
import NativeToolBar from "../utils/NativeToolbar";
import NativeIcon from "../dataDisplay/NativeIcon";
import NativeTooltip from "../dataDisplay/NativeTooltip";
import config from "../../../config/config";

export default function NativeTableToolBar(props) {
  const { HandleColumnFilter, columns, bulkActions, selected } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <NativeToolBar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(selected.length > 0 && {
          bgcolor: config.color.primaryTextColorLight,
        }),
      }}
    >
      {selected.length > 0 ? (
        <NativeTypographyBody1
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {selected.length} selected
        </NativeTypographyBody1>
      ) : null}

      {selected.length > 0 ? (
        <TableBulkAction selected={selected} bulkActions={bulkActions} />
      ) : (
        <NativeBox component="div" sx={{ flex: "100%", textAlign: "right" }}>
          <NativeTooltip title="Filter Columns">
            <NativeIconButton onClick={handleOpen}>
              <NativeIcon>filter_list</NativeIcon>
            </NativeIconButton>
          </NativeTooltip>
          <NativePopover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            {props?.headCells?.map((col) => (
              <NativeFormGroup row={true}>
                <NativeFormControlLabel
                  control={
                    <NativeCheckbox
                      onChange={(e) => {
                        HandleColumnFilter(e, col);
                      }}
                      checked={!columns.includes(col.id)}
                    />
                  }
                  label={col.label}
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 16, marginLeft: 2 } }}
                />
              </NativeFormGroup>
            ))}
          </NativePopover>
        </NativeBox>
      )}
    </NativeToolBar>
  );
}

NativeTableToolBar.propTypes = {
  selected: PropTypes.array.isRequired,
};
