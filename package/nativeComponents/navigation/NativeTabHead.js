import React from "react";
import {UtilityClasses} from '@wrappid/styles'
import NativeTab from "./NativeTab";
import NativeTabs from "./NativeTabs";

export default function NativeTabHead(props) {
  const {tabsContent, handleChange, tabValue} = props
  return <NativeTabs
    styleClasses={[
      UtilityClasses.MARGIN.MB1,
      UtilityClasses.POSITION.STICKY_TOP,
      UtilityClasses.BG.BG_WHITE,
      UtilityClasses.OVERFLOW.OVERFLOW_X_SCROLL,
      UtilityClasses.WIDTH.W_100,
    ]}
    value={tabValue}
    onChange={handleChange}
  >
    {
      tabsContent?.map((tabContent, tabIndex) => 
        <NativeTab
          value={tabContent?.id}
          label={tabContent?.label}
          key={tabContent?.id ? "tabContent-" + tabContent?.id : tabIndex}
        />  
      )
    }
  </NativeTabs>
}
