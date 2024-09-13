// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { SCFormControl } from "../../styledComponents/inputs/SCFormControl";
/**
 * @todo
 * added default fullWidth, set it to true as default
 * removed variant=standard.
 * need to handle impact.
 * @param {*} props 
 * @returns 
 */
export default function NativeFormControl(props) {
  const { fullWidth, ...restProps } = props;

  return <SCFormControl fullWidth={fullWidth ? fullWidth : true} {...restProps} />;
}
