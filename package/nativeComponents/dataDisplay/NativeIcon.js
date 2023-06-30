import React from "react";
import { SCIcon } from "../../styledComponents/dataDisplay/SCIcon";

/**
 * - important notice
 * - children > props > options(local/db) > default
 *
 * @param {*} props
 * @returns
 */

export const __IconTypes = {
  MATERIAL_ICON: "material-icons", // Default support of MUI
  MATERIAL_OUTLINED_ICON: "material-icons-outlined",
  FONTAWESOME_V5_SOLID_ICON: "fas",
  FONTAWESOME_V5_REGULAR_ICON: "far",
  RXICON_V1_REGULAR_ICON: "rxi",
};

export default function NativeIcon(props) {
  const { type, name, styleClasses, sx, size } = props;

  return props.childrenFlag ? (
    <SCIcon
      baseClasssName={Object.keys(__IconTypes).include(type) ? __IconTypes[type] : type}
      className={name}
      size={size || "small"}
      sx={sx}
      styleClasses={styleClasses || []}
    >
      {name}
    </SCIcon>
  ) : (
    <SCIcon
      baseClasssName={type}
      className={name}
      size={size || "small"}
      sx={sx}
      styleClasses={styleClasses || []}
    />
  );
}
