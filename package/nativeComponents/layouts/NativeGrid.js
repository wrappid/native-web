import { useState, useEffect, Children } from "react";

import { getUUID } from "../../helper/appUtils";
import { getGridSizeProps } from "../../helper/componentUtil";
import { SCGrid } from "../../styledComponents/layouts/SCGrid";
export default function NativeGrid(props) {
  const [_uuid, setUuid] = useState(null);
  const [containerId, setContainerId] = useState(null);

  useEffect(()=>{
    setUuid(getUUID());
    setContainerId(props?.NativeId ? "gc_" + props.NativeId : "gc_" + _uuid);
  }, []);

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
          let itemId = child.props?.NativeId
            ? containerId + "-gi-" + index + "_" + child.props.NativeId
            : containerId + "-gi-" + index;

          return (
            <SCGrid
              key={index}
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
