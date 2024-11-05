import React from "react";

export default function NativeDimension(props) {
  const { children, setDimensions } = props;

  React.useEffect(() => {
    setDimensions({
      screenFontScale: 1, // Default for web, #todo can be improve
      screenHeight   : window.screen.height,
      screenScale    : window.devicePixelRatio,
      screenWidth    : window.screen.width,
      windowFontScale: 1, // Default for web, #todo can be improve
      windowHeight   : window.innerHeight,
      windowScale    : window.devicePixelRatio,
      windowWidth    : window.innerWidth,
    });
  }, []);
    
  return <>{children}</>;
}