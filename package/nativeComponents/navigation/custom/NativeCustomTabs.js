import React from "react";
import { useLocation } from "react-router-dom";
import { componentMap } from "../../../utils/componentMap";
import { CoreClasses } from "@wrappid/styles";
import NativeTab from "../NativeTab";
import NativeTabPanel from "../NativeTabPanel";
import NativeTabs from "../NativeTabs";

export default function NativeCustomTabs(props) {
  const location = useLocation();
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
      {/* <pre>{JSON.stringify(tabsContent, null, 4)}</pre> */}
      <NativeTabs
        styleClasses={[
          CoreClasses.MARGIN.MB1,
          CoreClasses.POSITION.STICKY_TOP,
          CoreClasses.BG.BG_WHITE,
          CoreClasses.OVERFLOW.OVERFLOW_X_SCROLL,
          CoreClasses.WIDTH.W_100,
        ]}
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
            styleClasses={[CoreClasses.PADDING.P0]}
            value={tabValue}
            index={tabContent?.id || tabIndex}
          >
            {React.createElement(componentMap[tabContent.comp]?.comp)}
          </NativeTabPanel>
        );
      })}
    </>
  );
}
