// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { ButtonBase } from "@mui/material";

import { SCCard } from "../../styledComponents/surfaces/SCCard";

export default function NativeCard(props) {
  return props?.onClick ? (
    <ButtonBase sx={{ width: "100%" }} onClick={props?.onClick}>
      <SCCard {...props}>
        {props.children}
      </SCCard>
    </ButtonBase>
  ) : (
    <SCCard {...props }> { props.children }</SCCard >
  );
}
