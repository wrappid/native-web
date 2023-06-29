import React from "react";
import { UtilityClasses } from "@wrappid/styles";
import NativeStack from "../layouts/NativeStack";

export default function NativeDataTableToolbar(props) {
  const { allTools } = props;

  const formPanel=(panel)=>{
    return  <NativeStack
          direction="row"
          gridProps={{ gridSize: panel?.gridSize }}
          styleClasses={[
            UtilityClasses?.ALIGNMENT?.JUSTIFY_CONTENT_SPACE_BETWEEN,
            UtilityClasses?.ALIGNMENT?.ALIGN_ITEMS_CENTER,
          ]}
        >
          {panel?.stacks &&
            panel?.stacks?.map((stack) => (
              <NativeStack
                direction="row"
                styleClasses={[UtilityClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}
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
        </NativeStack>
  }
  
  return allTools?.map((row) => (
    <NativeGrid
      container={true}
      styleClasses={[
        props.styleClasses,
        UtilityClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN,
        UtilityClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
      ]}
    >
      {formPanel(row?.leftPanel)}
      {formPanel(row?.rightPanel)}
     
    </NativeGrid>
  ));
}
