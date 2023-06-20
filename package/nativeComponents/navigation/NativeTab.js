import React from "react";

import { SCTab } from "../../styledComponents/navigation/SCTab";

export default function NativeTab(props) {
  return (
    <SCTab
      {...props}
      style={
        value == currentTab
          ? {
              color: theme.palette.primary.main,
              borderBottom: "solid",
              borderBottomWidth: 2,
            }
          : {}
      }
      onClick={(e) => {
        onClick(e, value);
      }}
      selected={value == currentTab}
    >
      {props.children}
    </SCTab>
  );
}
