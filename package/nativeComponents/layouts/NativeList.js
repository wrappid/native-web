// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports, import/order
import React from "react";
// eslint-disable-next-line import/no-unresolved
import { UtilityClasses } from "@wrappid/styles";

import NativeGrid from "./NativeGrid";
import { SCList } from "../../styledComponents/layouts/SCList";

const defaultItemGridProps = { gridSize: { default: 6, md: 3, sm: 4 }, styleClasses: [UtilityClasses.BORDER.BORDER] };

export default function NativeList(props) {

  const { children, itemGridProps, variant, ...restProps } = props;
  
  const listStyleClasses = () => {
    let styleClasses = [];
      
    if (variant == "HTML") {
      if (props.listType) {
        styleClasses.push(UtilityClasses.PADDING.PL5, UtilityClasses.LIST_STYLE[props.listType]);
      }
    }
    return [...styleClasses, ...(props?.styleClasses || [])];
  };

  const listItemStyleClasses = (childProps) => {
    let styleClasses = [];
      
    if (props.listType) {
      styleClasses.push(UtilityClasses.DISPLAY.LIST_ITEM, UtilityClasses.PADDING.P0);
    }
    return [...styleClasses, ...(childProps?.styleClasses || [])];
  };
  
  return <SCList
    styleClasses={listStyleClasses()}
    {...restProps}>
    {variant == "GRID" ? (
      <NativeGrid>{
        React.Children.map(children, child => {
          if (React.isValidElement(child)) {
            const updatedProps = {
              ...child.props,
              gridProps   : itemGridProps || defaultItemGridProps,
              styleClasses: listItemStyleClasses(child.props)
            };
        
            return React.cloneElement(child, updatedProps); // Pass both props
          } else {
            return child;
          }
        })}</NativeGrid>) :
      (React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          const updatedProps = {
            ...child.props, // Spread existing props
            styleClasses: listItemStyleClasses(child.props)
          };
            
          return React.cloneElement(child, updatedProps); // Pass both props
        } else {
          return child;
        }
      }))}    
  </SCList>;
}
  