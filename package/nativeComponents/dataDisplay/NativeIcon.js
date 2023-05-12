import React from "react";
import { SCIcon } from "../../styledComponents/dataDisplay/SCIcon";

/**
 * - important notice
 * - children > props > options(local/db) > default
 *
 * @param {*} props
 * @returns
 */
export default function NativeIcon(props) {
  const { type, name, styleClasses, sx, size } = props;

  return (
    <SCIcon
      baseClasssName={type}
      className={name}
      size={size || "small"}
      sx={sx}
      styleClasses={styleClasses || []}
    />
  );
}
