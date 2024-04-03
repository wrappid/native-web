// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { ButtonBase } from "@mui/material";

import { SCCard } from "../../styledComponents/surfaces/SCCard";

export default function NativeCard(props) {
  return props?.onClick ? (
    <SCCard {...props}>
      <ButtonBase onClick={props?.onClick}>{props.children}</ButtonBase>
    </SCCard>
  ) : (
    <SCCard {...props }> { props.children }</SCCard >
  );
}
