import React from "react";

import { SCTab } from "../../styledComponents/navigation/SCTab";
import { useTheme } from "@mui/material";

export default function NativeTab(props) {
  const theme = useTheme()
  const {value, currentTab, onClick} = props

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
