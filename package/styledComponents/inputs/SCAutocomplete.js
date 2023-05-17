import React from "react";
import { styled } from "@mui/material/styles";
import { Autocomplete } from "@mui/material";
import { getEffectiveStyle, StyledComponentsClasses } from "@wrappid/styles";

const defaultStyleClasses = [StyledComponentsClasses.INPUTS.AUTO_COMPLETE];

export const SCAutocomplete = styled(
  Autocomplete,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
