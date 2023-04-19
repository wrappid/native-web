import React from "react";
import { CoreClasses } from "@wrappid/styles";
import NativeTypographyBody1 from "../../inputs/paragraph/NativeTypographyBody1";
import NativeBox from "../../layouts/NativeBox";
import NativeGrid from "../../layouts/NativeGrid";
import NativeCheckbox from "../NativeCheckbox";
import NativeInput from "../NativeInput";

export default function ChildMap({ parentOb, handleChange, formData, label }) {
  return parentOb?.__children?.map((childOb, j) => (
    <NativeGrid styleClasses={[CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}>
      <NativeBox
        gridProps={{ gridSize: 10 }}
        styleClasses={[CoreClasses.MARGIN.ML5, CoreClasses.PADDING.PL3]}
      >
        <NativeCheckbox
          id={childOb.id + "-hasEntry"}
          label={
            <NativeTypographyBody1 styleClasses={[CoreClasses.MARGIN.M0]}>
              {label + childOb?.name}
            </NativeTypographyBody1>
          }
          onChange={handleChange}
          checked={childOb?.hasEntry}
        />
      </NativeBox>
      <NativeInput
        id={childOb.id + "-priority"}
        label="Order/Priority"
        type="number"
        onChange={handleChange}
        gridProps={{ gridSize: 2 }}
        value={childOb?.priority}
      />
      {childOb?.__children ? (
        <NativeBox gridProps={{ gridSize: 12 }}>
          <ChildMap
            label={label + childOb.name + " > "}
            parentOb={childOb}
            handleChange={handleChange}
            formData={formData}
          />
        </NativeBox>
      ) : null}
    </NativeGrid>
  ));
}
