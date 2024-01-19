// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { SCAvatarGroup } from "../../styledComponents/dataDisplay/SCAvatarGroup";

export default function NativeAvatarGroup(props) {
  const { children, ...restProps } = props;

  return <SCAvatarGroup {...restProps}>{children}</SCAvatarGroup>;
}
