import React from "react";
import styled from "styled-components";
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
