import React from "react";
import { Children } from "react";
import { getGridSizeProps } from "../../utils/componentUtil";
import { SCGrid } from "../../layouts/SCGrid";
// import { DEFAULT_SPACING } from "../../styles/default/DefaultNativeStyles";
import { getUUID } from "../../utils/appUtils";

export default function NativeGrid(props) {
  let _uuid = getUUID();
  var containerId = props?.NativeId ? "gc_" + props.NativeId : "gc_" + _uuid;

  return (
    <SCGrid
      NativeId={containerId}
      styleClasses={props?.styleClasses}
      container={props?.container || true}
      item={props?.item || false}
      spacing={props?.spacing || 1}
      {...props}
    >
      {props?.item
        ? props.children
        : Children.toArray(props.children).map((child, index) => {
            var itemId = child.props?.NativeId
              ? containerId + "-gi-" + index + "_" + child.props.NativeId
              : containerId + "-gi-" + index;
            return (
              <SCGrid
                NativeId={itemId}
                item
                {...getGridSizeProps(child?.props?.gridProps?.gridSize)}
                styleClasses={child.props?.gridProps?.styleClasses || []}
              >
                {child}
              </SCGrid>
            );
          })}
    </SCGrid>
  );
}
