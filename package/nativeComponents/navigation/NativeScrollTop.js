import useScrollTrigger from "@mui/material/useScrollTrigger";
import PropTypes from "prop-types";

import NativeBox from "../layouts/NativeBox";
import NativeFade from "../utils/NativeFade";

export default function NativeScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    target           : window ? window() : undefined,
    threshold        : 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ block: "center" });
    }
  };

  return (
    <NativeFade in={trigger}>
      <NativeBox
        onClick={handleClick}
        role="presentation"
        sx={{ bottom: 16, position: "fixed", right: 16 }}
      >
        {children}
      </NativeBox>
    </NativeFade>
  );
}

NativeScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window  : PropTypes.func,
};
