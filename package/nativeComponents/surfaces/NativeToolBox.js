// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React, { useRef, useState, useEffect } from "react";

// eslint-disable-next-line import/no-unresolved
import { UtilityClasses } from "@wrappid/styles";

import NativeCardContent from "./NativeCardContent";
import { SCToolBox } from "../../styledComponents/surfaces/SCToolBox";
import NativeIcon from "../dataDisplay/NativeIcon";
import NativeIconButton from "../inputs/NativeIconButton";
import NativeCardHeader from "../surfaces/NativeCardHeader";
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
  ...props 
}) {
  const cardRef = useRef(null);
  const [position, setPosition] = useState({
    left: positionLeft,
    top : positionTop,
  });
  const [dragging, setDragging] = useState(false);
  const [startDrag, setStartDrag] = useState({ x: 0, y: 0 });
  const [expanded, setExpanded] = useState(true);
  const [dimensions, setDimensions] = useState({ height: undefined, width: undefined });

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
        UtilityClasses.OVERFLOW.OVERFLOW_HIDDEN, UtilityClasses.DISPLAY.FLEX, UtilityClasses.FLEX.DIRECTION_COLUMN]}
    >
      <NativeCardHeader
        avatar={
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          />
        }
        title={toolTitle}
        action={
          <NativeIconButton
            aria-label="restart"
            onClick={() => {
              setPosition({ left: positionLeft, top: positionTop });
            }}>
            <NativeIcon type="material-icons" name="restart_alt" childrenFlag={true} />
          </NativeIconButton>
        }
        styleClasses={[UtilityClasses.CURSOR.CURSOR_MOVE, UtilityClasses.BORDER.BORDER_BOTTOM]}
        onMouseDown={onMouseDownHeader}
      />

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
