import styled from "styled-components";
import { TableCell } from "@mui/material";
import { getEffectiveStyle } from "@wrappid/styles";
import CoreClasses from "./@wrappid/styles";

const defaultStyleClasses = [CoreClasses.SC.DATA_DISPLAY.TABLE_CELL];

export const SCTableCell = styled(
  TableCell,
  {}
)((props) => ({
  ...getEffectiveStyle([
    ...defaultStyleClasses,
    ...(props?.styleClasses || []),
  ]),
}));
