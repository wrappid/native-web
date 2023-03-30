import React from "react";
import styled from "styled-components";
import { Autocomplete } from "@mui/material";
import { getEffectiveStyle, CoreClasses } from "@wrappid/styles";

const defaultStyleClasses = [CoreClasses.SC.INPUTS.AUTO_COMPLETE];

export const SCAutocomplete = styled(
  Autocomplete,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
