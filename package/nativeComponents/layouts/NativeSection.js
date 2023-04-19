import React from "react";
import { CoreClasses } from "@wrappid/styles";
import NativeH5 from "../layouts/heading/NativeH5";
import NativeCard from "../surfaces/NativeCard";
import NativeCardContent from "../surfaces/NativeCardContent";
import NativeCardHeader from "../surfaces/NativeCardHeader";

export default function NativeSection(props) {
  const { styleClasses = [] } = props;
  return (
    <NativeCard
      styleClasses={[
        CoreClasses.MARGIN.MB2,
        CoreClasses.PADDING.P0,
        ...styleClasses,
      ]}
    >
      <NativeCardHeader
        styleClasses={[CoreClasses.PADDING.P1]}
        title={props?.heading && <NativeH5>{props?.heading}</NativeH5>}
      />
      <NativeCardContent styleClasses={[]}>{props?.children}</NativeCardContent>
    </NativeCard>
  );
}
