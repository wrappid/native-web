import React from "react";
import { UtilityClasses } from "@wrappid/styles";
import NativeStack from "../layouts/NativeStack";

export default function NativeDataTableToolbar(props) {
  const { allTools } = props;
  
  return allTools?.map((row) => (
    <NativeGrid
      container={true}
      styleClasses={[
        props.styleClasses,
        UtilityClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN,
        UtilityClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
      ]}
    >
      {row?.leftPanel && (
        <NativeStack
          direction="row"
          gridProps={{ gridSize: row?.leftPanel?.gridSize }}
          styleClasses={[
            UtilityClasses?.ALIGNMENT?.JUSTIFY_CONTENT_SPACE_BETWEEN,
            UtilityClasses?.ALIGNMENT?.ALIGN_ITEMS_CENTER,
          ]}
        >
          {row?.leftPanel?.stacks &&
            row?.leftPanel?.stacks?.map((stack) => (
              <NativeStack
                direction="row"
                styleClasses={[CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}
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
      )}
      {row?.rightPanel && (
        <NativeStack
          direction="row"
          gridProps={{ gridSize: row?.rightPanel?.gridSize }}
          styleClasses={[
            UtilityClasses?.ALIGNMENT?.JUSTIFY_CONTENT_SPACE_BETWEEN,
            UtilityClasses?.ALIGNMENT?.ALIGN_ITEMS_CENTER,
          ]}
        >
          {row?.rightPanel?.stacks &&
            row?.rightPanel?.stacks?.map((stack) => (
              <NativeStack
                direction="row"
                styleClasses={[CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}
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
      )}
    </NativeGrid>
  ));
}
