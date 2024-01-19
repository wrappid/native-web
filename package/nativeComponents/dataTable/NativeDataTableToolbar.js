// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { UtilityClasses } from "@wrappid/styles";

import NativeGrid from "../layouts/NativeGrid";
import NativeStack from "../layouts/NativeStack";

export default function NativeDataTableToolbar(props) {
  const { allTools } = props;

  const formPanel = (panel)=>{
    return <NativeStack
      direction="row"
      gridProps={{ gridSize: panel?.gridSize }}
      styleClasses={[UtilityClasses.WIDTH.W_100, UtilityClasses?.ALIGNMENT?.JUSTIFY_CONTENT_SPACE_BETWEEN, UtilityClasses?.ALIGNMENT?.ALIGN_ITEMS_CENTER]}
    >
      {panel?.stacks &&
            panel?.stacks?.map((stack, index) => (
              <NativeStack
                key={index}
                direction="row"
                styleClasses={[UtilityClasses.WIDTH.W_100, UtilityClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}
              >
                {stack?.map((element) =>
                  element?.comp
                    ? typeof element?.comp === "function"
                      ? element.comp()
                      : element.comp
                    : null
                )}
              </NativeStack>
            ))}
    </NativeStack>;
  };
  
  return allTools?.map((row, index) => (
    <NativeGrid
      key={index}
      container={true}
      styleClasses={[props.styleClasses, UtilityClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN, UtilityClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}
    >
      {formPanel(row?.leftPanel)}

      {formPanel(row?.rightPanel)}
    </NativeGrid>
  ));
}
