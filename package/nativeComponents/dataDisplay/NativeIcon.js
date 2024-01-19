// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
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
  FONTAWESOME_V5_REGULAR_ICON: "far", 
  FONTAWESOME_V5_SOLID_ICON  : "fas",
  
  MATERIAL_ICON         : "material-icons",
  // Default support of MUI
  MATERIAL_OUTLINED_ICON: "material-icons-outlined",
  RXICON_V1_REGULAR_ICON: "rxi",
};

export default function NativeIcon(props) {
  const {
    type, name, styleClasses, sx, size, fontSize 
  } = props;

  return props.childrenFlag ? (
    <SCIcon
      baseClassName={
        Object.keys(__IconTypes).includes(type) ? __IconTypes[type] : type
      }
      className={name}
      fontSize={size || fontSize || "small"}
      sx={sx}
      styleClasses={styleClasses || []}
    >
      {name}
    </SCIcon>
  ) : (
    <SCIcon
      baseClassName={
        Object.keys(__IconTypes).includes(type) ? __IconTypes[type] : type
      }
      className={name}
      fontSize={size || fontSize || "small"}
      sx={sx}
      styleClasses={styleClasses || []}
    />
  );
}
