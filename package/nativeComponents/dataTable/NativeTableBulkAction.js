import * as React from "react";

import NativeTooltip from "../dataDisplay/NativeTooltip";
import NativeIconButton from "../inputs/NativeIconButton";
import NativeIcon from "../dataDisplay/NativeIcon";

export default function NativeTableBulkAction({ bulkActions, selected }) {
  return (
    bulkActions &&
    bulkActions.map((ac) =>
      ac.iconName === "delete" ? (
        <NativeTooltip title="Delete">
          <NativeIconButton
            onClick={() => {
              ac.action(selected);
            }}
          >
            <NativeIcon>delete</NativeIcon>
          </NativeIconButton>
        </NativeTooltip>
      ) : null
    )
  );
}
