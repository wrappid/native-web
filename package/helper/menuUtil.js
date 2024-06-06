/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { StyledComponentsClasses } from "@wrappid/styles";

import { queryBuilder } from "./helper";
import NativeDivider from "../nativeComponents/dataDisplay/NativeDivider";
import NativeIcon from "../nativeComponents/dataDisplay/NativeIcon";
import NativeListItemIcon from "../nativeComponents/dataDisplay/NativeListItemIcon";
import NativeListItemText from "../nativeComponents/dataDisplay/NativeListItemText";
import NativeIconButton from "../nativeComponents/inputs/NativeIconButton";
import NativeLink from "../nativeComponents/navigation/NativeLink";
import NativeMenuItem from "../nativeComponents/navigation/NativeMenuItem";

function isJson(str) {
  try {
    JSON.parse(str);
  } catch (error) {
    //--console.error(error);
    return false;
  }
  return isNaN(str);
}

function getLink(menuItem, allTypes, routeRegistry) {
  let menuLink = "";

  if (menuItem?.type === allTypes?.MENU_ITEM || !menuItem?.type) {
    if (menuItem?.route && routeRegistry) {
      if (menuItem.params) {
        if (typeof menuItem.params === "string") {
          menuLink = `${routeRegistry[menuItem.route] + menuItem.params}`;
        } else {
          let url = queryBuilder(
            routeRegistry[menuItem.route],
            menuItem.params
          );

          menuLink = `${url}`;
        }
      } else {
        menuLink = routeRegistry[menuItem.route];
      }
      menuLink = `/${menuLink}`;
    } else {
      if (menuItem.link) {
        menuLink = menuItem.link;
      } else {
        menuLink = "javascript:void(0)";
      }
    }
  } else {
    menuLink = "javascript:void(0)";
  }
  return menuLink;
}

export default function getNativeMenuItem(
  menuItem,
  level,
  OnMenuClick,
  miniDrawer,
  open,
  selectedID,
  setSelectedID,
  locationPathname,
  theme,
  allTypes,
  routeRegistry,
  displayIcon
) {
  /**
   * @todo review required for using core menu item instead of core List Item
   */
  return menuItem.type === allTypes?.MENU_SEPERATOR ? (
    <NativeDivider />
  ) : open ? (    
    <NativeLink href={getLink(menuItem, allTypes, routeRegistry)}>
      <NativeMenuItem
        sx={{
          backgroundColor:
            menuItem?.type === allTypes?.MENU_ITEM &&
            locationPathname === menuItem?.link &&
            theme?.palette?.secondary?.light,
          height     : "34px",
          paddingLeft: `calc(13px + ${level * 8}px)`,
        }}
        key={menuItem.id}
        disablePadding
        title={menuItem?.label}
        onClick={() => {
          OnMenuClick(menuItem);
        }}
      >
        {displayIcon ?
          (<NativeListItemIcon
            styleClasses={[StyledComponentsClasses.MENU.LIST_ITEM_ICON, ...getTypeWiseStyle(menuItem, allTypes?.MENU_ITEM_ICON, allTypes)]}
          >
            {/* @todo may have to correct this */}
            <NativeIcon
              name={
                typeof menuItem?.icon === "object"
                  ? menuItem?.icon?.icon
                  : typeof menuItem?.icon === "string" && isJson(menuItem?.icon)
                    ? JSON.parse(menuItem?.icon)?.icon
                    : menuItem?.icon
              }
              type={
                typeof menuItem?.icon === "object"
                  ? menuItem?.icon?.type || "material-icons"
                  : typeof menuItem?.icon === "string" && isJson(menuItem?.icon)
                    ? JSON.parse(menuItem?.icon)?.type
                    : "material-icons"
              }
              childrenFlag={
                typeof menuItem?.icon === "object"
                  ? menuItem?.icon?.type == "material-icons" ||
                  menuItem?.icon?.type == "material-icons-outlined"
                  : typeof menuItem?.icon === "string" && isJson(menuItem?.icon)
                    ? JSON.parse(menuItem?.icon)?.type == "material-icons" ||
                  JSON.parse(menuItem?.icon)?.type == "material-icons-outlined"
                    : true
              }
              sx={{
                color: `${
                  menuItem?.type === allTypes?.MENU_ITEM &&
                locationPathname === menuItem?.link
                    ? theme?.palette?.primary?.light
                    : theme?.palette?.secondary?.dark
                }!important`,
              }}
            />
          </NativeListItemIcon>) :
          (<></>)}

        <NativeListItemText
          disableTypography
          styleClasses={[StyledComponentsClasses.NAVIGATION.APP_DRAWER_TEXT, ...getTypeWiseStyle(menuItem, allTypes?.MENU_ITEM_TEXT, allTypes)]}
          primary={menuItem.label}
          sx={{
            color: `${
              menuItem?.type === allTypes?.MENU_ITEM &&
              locationPathname === menuItem?.link
                ? theme?.palette?.primary?.light
                : theme?.palette?.secondary?.dark
            }!important`,
          }}
        />
      </NativeMenuItem>
    </NativeLink>
  ) : (
    <NativeLink
      sx={{ height: "34px" }}
      href={
        menuItem?.type === allTypes?.MENU_ITEM && menuItem?.link
          ? menuItem?.link
          : "javascript:void(0)"
      }
    >
        <NativeIconButton
        title={menuItem?.label}
        titlePlacement={"right"}
        onClick={() => {
          setSelectedID(menuItem?.name);
          OnMenuClick(menuItem);
        }}
      >             
        <NativeIcon
          name={
            typeof menuItem?.icon === "object"
              ? menuItem?.icon?.icon
              : typeof menuItem?.icon === "string" && isJson(menuItem?.icon)
                ? JSON.parse(menuItem?.icon)?.icon
                : menuItem?.icon
          }
          type={
            typeof menuItem?.icon === "object"
              ? menuItem?.icon?.type || "material-icons"
              : typeof menuItem?.icon === "string" && isJson(menuItem?.icon)
                ? JSON.parse(menuItem?.icon)?.type
                : "material-icons"
          }
          childrenFlag={
            typeof menuItem?.icon === "object"
              ? menuItem?.icon?.type == "material-icons" ||
                menuItem?.icon?.type == "material-icons-outlined"
              : typeof menuItem?.icon === "string" && isJson(menuItem?.icon)
                ? JSON.parse(menuItem?.icon)?.type == "material-icons" ||
                JSON.parse(menuItem?.icon)?.type == "material-icons-outlined"
                : true
          }
          sx={{
            color: `${
              menuItem?.type === allTypes?.MENU_ITEM &&
              locationPathname === menuItem?.link
                ? theme?.palette?.primary?.light
                : theme?.palette?.secondary?.dark
            }!important`,
          }}
        />        
      </NativeIconButton>
    </NativeLink>
  );
}

function getTypeWiseStyle(item, elemType, allTypes) {  
  let styles = [];
  const {
    MENU_PARENT_ITEM,
    MENU_ITEM_WRAPPER,
    MENU_ITEM_BUTTON,
    MENU_ITEM_ICON,
    MENU_ITEM_TEXT,
    MENU_HEADER_ITEM,
    MENU_SEPERATOR,
    MENU_ITEM,
  } = allTypes;

  switch (item.type) {
    case MENU_PARENT_ITEM:
      if (elemType === MENU_ITEM_WRAPPER) {
        styles.push(StyledComponentsClasses.MENU.PARENT_ITEM);
      }
      if (elemType === MENU_ITEM_BUTTON) {
        styles.push(StyledComponentsClasses.MENU.PARENT_BUTTON_ITEM);
      }
      if (elemType === MENU_ITEM_ICON) {
        styles.push(StyledComponentsClasses.MENU.PARENT_ICON_ITEM);
      }
      if (elemType === MENU_ITEM_TEXT) {
        styles.push(StyledComponentsClasses.MENU.PARENT_TEXT_ITEM);
      }
      break;

    case MENU_HEADER_ITEM:
      if (elemType === MENU_ITEM_WRAPPER) {
        styles.push(StyledComponentsClasses.MENU.HEADER_ITEM);
      }
      if (elemType === MENU_ITEM_BUTTON) {
        styles.push(StyledComponentsClasses.MENU.HEADER_BUTTON_ITEM);
      }
      if (elemType === MENU_ITEM_ICON) {
        styles.push(StyledComponentsClasses.MENU.HEADER_ICON_ITEM);
      }
      if (elemType === MENU_ITEM_TEXT) {
        styles.push(StyledComponentsClasses.MENU.HEADER_TEXT_ITEM);
      }
      break;

    case MENU_SEPERATOR:
      if (elemType === MENU_ITEM_WRAPPER) {
        styles.push(StyledComponentsClasses.MENU.SEPERATOR_ITEM);
      }
      if (elemType === MENU_ITEM_BUTTON) {
        styles.push(StyledComponentsClasses.MENU.SEPERATOR_BUTTON_ITEM);
      }
      if (elemType === MENU_ITEM_ICON) {
        styles.push(StyledComponentsClasses.MENU.SEPERATOR_ICON_ITEM);
      }
      if (elemType === MENU_ITEM_TEXT) {
        styles.push(StyledComponentsClasses.MENU.SEPERATOR_TEXT_ITEM);
      }
      break;

    case MENU_ITEM:
      if (elemType === MENU_ITEM_WRAPPER) {
        styles.push(StyledComponentsClasses.MENU.MENU_ITEM);
      }
      if (elemType === MENU_ITEM_BUTTON) {
        styles.push(StyledComponentsClasses.MENU.MENU_ITEM_BUTTON_ITEM);
      }
      if (elemType === MENU_ITEM_ICON) {
        styles.push(StyledComponentsClasses.MENU.MENU_ITEM_ICON_ITEM);
      }
      if (elemType === MENU_ITEM_TEXT) {
        styles.push(StyledComponentsClasses.MENU.MENU_ITEM_TEXT_ITEM);
      }
      break;

    default:
      if (elemType === MENU_ITEM_WRAPPER) {
        styles.push(StyledComponentsClasses.MENU.MENU_ITEM);
      }
      if (elemType === MENU_ITEM_BUTTON) {
        styles.push(StyledComponentsClasses.MENU.MENU_ITEM_BUTTON_ITEM);
      }
      if (elemType === MENU_ITEM_ICON) {
        styles.push(StyledComponentsClasses.MENU.MENU_ITEM_ICON_ITEM);
      }
      if (elemType === MENU_ITEM_TEXT) {
        styles.push(StyledComponentsClasses.MENU.MENU_ITEM_TEXT_ITEM);
      }
      break;
  }
  return styles;
}
