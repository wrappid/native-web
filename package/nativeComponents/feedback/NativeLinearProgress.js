// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { UtilityClasses } from "@wrappid/styles";

import { SCLinearProgress } from "../../styledComponents/feedback/SCLinearProgress";
import NativeTypography from "../dataDisplay/NativeTypography";
import NativeBox from "../layouts/NativeBox";

export default function NativeLinearProgress(props) {
  const { children, showPercentage, ...rest } = props;
  const boxWidth = "35px";

  return (
    <NativeBox styleClasses={[UtilityClasses.DISPLAY.FLEX, UtilityClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}>
      <NativeBox styleClasses={[UtilityClasses.WIDTH.W_100]}>
        <SCLinearProgress {...rest}>{children}</SCLinearProgress>
      </NativeBox>
      
      {showPercentage && (
        <NativeBox width={boxWidth} styleClasses={[UtilityClasses.MARGIN.ML1]}>
          <NativeTypography variant="body1">
            {`${Math.round(rest.value)}%`}
          </NativeTypography>
        </NativeBox>
      )}
      
    </NativeBox>

  );
}