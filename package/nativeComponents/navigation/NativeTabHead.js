import React from "react";
import {UtilityClasses, StyledComponentsClasses} from '@wrappid/styles'
import NativeTab from "./NativeTab";
import NativeTabs from "./NativeTabs";

export default function NativeTabHead(props) {
  const {tabsContent, handleChange, tabValue} = props
  return <NativeTabs
    styleClasses={[
      StyledComponentsClasses?.WEB?.TAB_HEAD
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
