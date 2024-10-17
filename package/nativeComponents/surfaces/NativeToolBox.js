/* eslint-disable etc/no-commented-out-code */
// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React, { useRef, useState, useEffect } from "react";

// eslint-disable-next-line import/no-unresolved
import { UtilityClasses } from "@wrappid/styles";

import NativeCardContent from "./NativeCardContent";
import { SCToolBox } from "../../styledComponents/surfaces/SCToolBox";
import NativeIcon from "../dataDisplay/NativeIcon";
import NativeTypographyBody2 from "../dataDisplay/paragraph/NativeTypographyBody2";
import NativeIconButton from "../inputs/NativeIconButton";
import NativeBox from "../layouts/NativeBox";
import NativeCollapse from "../surfaces/NativeCollapse";

function ExpandMore({ expand, ...otherProps }) {
  return (
    <NativeIconButton
      {...otherProps}
      styleClasses={[UtilityClasses.MARGIN.ML_AUTO, expand ? UtilityClasses.TRANSFORM.ROTATE.ROTATE_180 : UtilityClasses.TRANSFORM.ROTATE.ROTATE_X_15]}
    >
      <NativeIcon type="material-icons" name="expand_more" childrenFlag={true} />
    </NativeIconButton>
  );
}

export default function NativeToolBox({ 
  positionLeft, 
  positionTop, 
  toolTitle, 
  toolboxActionButton,
  expandProp,
  ...props 
}) {
  const cardRef = useRef(null);
  const [position, setPosition] = useState({
    left: positionLeft,
    top : positionTop,
  });
  const [dragging, setDragging] = useState(false);
  const [startDrag, setStartDrag] = useState({ x: 0, y: 0 });
  const [expanded, setExpanded] = useState(expandProp);
  const [dimensions, setDimensions] = useState({ height: undefined, width: undefined });
  const [dropdownVisible, setDropdownVisible] = useState(false); // Add dropdown visibility state

  // Set initial position based on the rendered position if the card is already placed
  useEffect(() => {
    if (cardRef.current) {
      const { left, top } = cardRef.current.getBoundingClientRect();

      setPosition({ left, top });
    }
  }, []);

  // Update dimensions when card expands or collapses
  useEffect(() => {
    if (cardRef.current) {
      const { width, height } = cardRef.current.getBoundingClientRect();

      setDimensions({ height: expanded ? height : undefined, width: expanded ? width : undefined });
    }
  }, [expanded]);

  // Handle dragging logic
  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!dragging) return;

      const newX = event.clientX - startDrag.x;
      const newY = event.clientY - startDrag.y;

      const maxWidth = window.innerWidth - cardRef.current.offsetWidth;
      const maxHeight = window.innerHeight - cardRef.current.offsetHeight;

      setPosition({
        left: Math.min(Math.max(newX, 0), maxWidth),
        top : Math.min(Math.max(newY, 0), maxHeight),
      });
    };

    const handleMouseUp = () => {
      setDragging(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging, startDrag]);

  // Start dragging
  const onMouseDownHeader = (event) => {
    setDragging(true);
    setStartDrag({
      x: event.clientX - position.left,
      y: event.clientY - position.top,
    });
  };

  const handleExpandClick = () => {
    setExpanded((prev) => {
      // Force an update of dimensions when toggling expanded state
      if (!prev) {
        const { width, height } = cardRef.current.getBoundingClientRect();

        setDimensions({ height, width });
      }
      return !prev;
    });
  };

  // Logic to handle rendering of buttons and dropdown

  const renderToolboxActionButtons = () => {
    if (!Array.isArray(toolboxActionButton)) {
      return toolboxActionButton;
    }

    if (toolboxActionButton.length <= 2) {
      return (
        <NativeBox style={{ alignItems: "center", display: "flex", marginBottom: "4px", marginRight: "8px", marginTop: "4px" }}>
          {toolboxActionButton.map((button, index) => (
            <React.Fragment key={index}>{button}</React.Fragment>
          ))}
        </NativeBox>
      );
    }

    // If more than 2 buttons, show all in dropdown
    return (
      <NativeBox style={{
        alignItems  : "center",
        display     : "flex",
        marginBottom: "4px",
        marginRight : "8px",
        marginTop   : "4px",
        position    : "relative" 
      }}>
        <NativeIconButton onClick={() => setDropdownVisible(!dropdownVisible)}>
          <NativeIcon type="material-icons" name="more_vert" childrenFlag={true} />
        </NativeIconButton>

        {dropdownVisible && (
          <NativeBox
            styleClasses={[
              UtilityClasses.SHADOW.SMALL,
              UtilityClasses.POSITION.POSITION_ABSOLUTE,
              UtilityClasses.POSITION.END_0,
              UtilityClasses.POSITION.TOP_100,
              UtilityClasses.Z_INDEX.Z_3, 
              UtilityClasses.DISPLAY.FLEX
            ]}
          >
            {toolboxActionButton.map((button, index) => (
              <NativeBox key={index} onClick={() => setDropdownVisible(false)}>
                {button}
              </NativeBox>
            ))}
          </NativeBox>
        )}
      </NativeBox>
    );
  };

  return (
    <SCToolBox
      {...props}
      ref={cardRef}
      style={{
        //todo we have to fix styles package
        height: expanded ? "auto" : dimensions.height || "auto",
        left  : `${position.left}px`, 
        top   : `${position.top}px`,
        width : expanded ? "auto" : dimensions.width || "auto",
      }}
      styleClasses={[  
        // UtilityClasses.POSITION.POSITION_ABSOLUTE,
        UtilityClasses.OVERFLOW.OVERFLOW_HIDDEN, UtilityClasses.DISPLAY.FLEX, UtilityClasses.FLEX.DIRECTION_COLUMN
      ]}
    >
      <NativeBox 
        styleClasses={[
          UtilityClasses.DISPLAY.FLEX, 
          UtilityClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN,
          UtilityClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
          UtilityClasses.BORDER.BORDER_BOTTOM,
          UtilityClasses.BORDER.BORDER_GREY_400,
          UtilityClasses.BG.BG_GREY_100
        ]}
        onMouseDown={onMouseDownHeader}
      >
        <NativeBox styleClasses={[UtilityClasses.DISPLAY.FLEX, UtilityClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, UtilityClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, UtilityClasses.GAP.GAP_1]}>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          />

          <NativeTypographyBody2 styleClasses={[UtilityClasses.COLOR.TEXT_BLACK_50]}>
            {toolTitle}
          </NativeTypographyBody2>
        </NativeBox>

        <NativeBox styleClasses={[UtilityClasses.DISPLAY.FLEX, UtilityClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, UtilityClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}>
          {renderToolboxActionButtons()}
        </NativeBox>
      </NativeBox>

      <NativeCollapse
        in={expanded}
        timeout="auto"
        unmountOnExit
        styleClasses={[UtilityClasses.FLEX.FLEX_GROW_1, UtilityClasses.OVERFLOW.OVERFLOW_AUTO]}>
        <NativeCardContent>
          {props.children}
        </NativeCardContent>
      </NativeCollapse>
    </SCToolBox>
  );
}
