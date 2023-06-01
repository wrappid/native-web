import React from "react";
import NativeTabPanel from "./NativeTabPanel";
import NativeTab from "./NativeTab";
import NativeTabs from "./NativeTabs";
import { nativeUseLocation } from "../helper/routerHelper";

export default function NativeCustomTabs(props) {
  const location = nativeUseLocation();

  {/* the below code is the real mui code that will be shifted to "NativeCustomTabs" for web -->saif  */ }
  // return <CoreCustomTabs tabsContent={tabsContent} />;   -->this is used in Manageappointment.js exporting the props i.e tabsContent.

  const { tabsContent, preHandleChangeHook, postHandleChangeHook } = props;
  const [tabValue, setTabValue] = React.useState(tabsContent[0]?.id || 0);

  React.useEffect(() => {
    if (
      location?.hash &&
      tabsContent?.filter((tabContent) => {
        return tabContent?.id === location?.hash?.replace("#", "");
      })?.length > 0
    ) {
      setTabValue(location.hash?.replace("#", ""));
    } else {
      setTabValue(tabsContent[0]?.id);
    }
  }, [tabsContent, location]);

  const handleChange = (e, value) => {
    preHandleChangeHook && preHandleChangeHook(e, value);
    setTabValue(value);
    postHandleChangeHook && postHandleChangeHook(e, value);
  };

  return (
    <>
      <NativeTabs
        styleClasses={props.tabsClasses}
        value={tabValue}
        onChange={handleChange}
      >
        {tabsContent?.map((tabContent) => {
          return <NativeTab value={tabContent?.id} label={tabContent?.label} />;
        })}
      </NativeTabs>
      {tabsContent?.map((tabContent, tabIndex) => {
        return (
          <NativeTabPanel
            styleClasses={props.tabPanelClasses}
            value={tabValue}
            index={tabContent?.id || tabIndex}
          >
            {React.createElement(
              props.componentRegistry[tabContent.comp]?.comp
            )}
          </NativeTabPanel>
        );
      })}
    </>
  );
}