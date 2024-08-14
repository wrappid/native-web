// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports, import/order
import React from "react";
// eslint-disable-next-line import/no-unresolved
import { UtilityClasses } from "@wrappid/styles";

import { SCList } from "../../styledComponents/layouts/SCList";

export default function NativeList(props) {
  
  const { children, ...restProps } = props;
    
  const listStyleClasses = () => {
    let styleClasses = [];

    if (props.variant == "HTML") {
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
    {...restProps}>{
      React.Children.map(children, child => {
        const updatedProps = {
          ...child.props, // Spread existing props
          styleClasses: listItemStyleClasses(child.props)
        };

        return React.cloneElement(child, updatedProps); // Pass both props
      })}</SCList>;
}

