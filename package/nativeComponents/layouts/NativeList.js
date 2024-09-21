// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports, import/order
import React from "react";
// eslint-disable-next-line import/no-unresolved
import { UtilityClasses } from "@wrappid/styles";

import NativeGrid from "./NativeGrid";
import { SCList } from "../../styledComponents/layouts/SCList";

const gridItemComponentObj = {
  default: 12, l: 4, m: 3, s: 2, xl: 6, xs: 1 
};

export default function NativeList(props) {

  const { children, ...restProps } = props;
  const [gridProps, setGridProps] = React.useState({});

  React.useEffect(() => { setGridProps({ gridSize: { md: gridItemComponentObj[props.gridItemComponent] } }); }, []);
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
    if (props.borderList === true ) {
      styleClasses.push(UtilityClasses.BORDER.BORDER);
    }
    return [...styleClasses, ...(childProps?.styleClasses || [])];
  };

  if (props.variant == "GRID") {
    if (props.gridItemComponent) {
      return <SCList
        styleClasses={listStyleClasses()}
        {...restProps}>
        <NativeGrid>{
          React.Children.map(children, child => {
            if (React.isValidElement(child)) {
              const updatedProps = {
                ...child.props,
                gridProps   : gridProps,
                styleClasses: listItemStyleClasses(child.props)
              };
        
              return React.cloneElement(child, updatedProps); // Pass both props
            } else {
              return child;
            }
          })}</NativeGrid>
      </SCList>;
    } else {
      return <SCList
        styleClasses={listStyleClasses()}
        {...restProps}>
        <NativeGrid>{
          React.Children.map(children, child => {
            if (React.isValidElement(child)) {
              const updatedProps = {
                ...child.props,
                styleClasses: listItemStyleClasses(child.props)
              };
        
              return React.cloneElement(child, updatedProps); // Pass both props
            } else {
              return child;
            }
          })}</NativeGrid>
      </SCList>;
    }
  }
  else {
  
    return <SCList
      styleClasses={listStyleClasses()}
      {...restProps}>{
        React.Children.map(children, child => {
          if (React.isValidElement(child)) {
            const updatedProps = {
              ...child.props, // Spread existing props
              styleClasses: listItemStyleClasses(child.props)
            };
        
            return React.cloneElement(child, updatedProps); // Pass both props
          } else {
            return child;
          }
        })}</SCList>;
  }
}
  