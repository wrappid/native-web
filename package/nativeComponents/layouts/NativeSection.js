// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { UtilityClasses } from "@wrappid/styles";

import NativeH5 from "../dataDisplay/heading/NativeH5";
import NativeCard from "../surfaces/NativeCard";
import NativeCardContent from "../surfaces/NativeCardContent";
import NativeCardHeader from "../surfaces/NativeCardHeader";

export default function NativeSection(props) {
  const { styleClasses = [] } = props;

  return (
    <NativeCard
      styleClasses={[UtilityClasses.MARGIN.MB2, UtilityClasses.PADDING.P0, ...styleClasses]}
    >
      <NativeCardHeader
        styleClasses={[UtilityClasses.PADDING.P1]}
        title={props?.heading && <NativeH5>{props?.heading}</NativeH5>}
      />

      <NativeCardContent styleClasses={[]}>{props?.children}</NativeCardContent>
    </NativeCard>
  );
}
