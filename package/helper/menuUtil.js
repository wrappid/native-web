import React from "react";
import { StyledComponentsClasses } from "@wrappid/styles";
import { isJson } from "./stringUtils";
import NativeDivider from "../nativeComponents/dataDisplay/NativeDivider";
import NativeLink from "../nativeComponents/navigation/NativeLink";
import NativeMenuItem from "../nativeComponents/navigation/NativeMenuItem";
import NativeListItemIcon from "../nativeComponents/dataDisplay/NativeListItemIcon";
import NativeIcon from "../nativeComponents/dataDisplay/NativeIcon";
import NativeListItemText from "../nativeComponents/dataDisplay/NativeListItemText";
import NativeIconButton from "../nativeComponents/inputs/NativeIconButton";

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
  allTypes
) {
  // console.log("OPEN", open);
  /**
   * @todo review required for using core menu item instead of core List Item
   */
  return menuItem.type === allTypes?.MENU_SEPERATOR ? (
    <NativeDivider />
  ) : open ? (
    <NativeLink
      href={
        menuItem?.type === allTypes?.MENU_ITEM && menuItem?.link
          ? menuItem?.link
          : "javascript:void(0)"
      }
    >
      <NativeMenuItem
        sx={{
          height: "34px",
          paddingLeft: `calc(13px + ${level * 8}px)`,
          backgroundColor:
            menuItem?.type === allTypes?.MENU_ITEM &&
            locationPathname === menuItem?.link &&
            theme.palette.secondary.light,
        }}
        key={menuItem.id}
        disablePadding
        title={menuItem.label}
        onClick={(e) => {
          // setSelectedID(menuItem?.name);
          OnMenuClick(menuItem);
        }}
      >
        <NativeListItemIcon
          styleClasses={
            miniDrawer
              ? [
                  StyledComponentsClasses.MENU.MINI_DRAWER_LIST_ITEM_ICON,
                  ...getTypeWiseStyle(
                    menuItem,
                    allTypes?.MENU_ITEM_ICON,
                    allTypes
                  ),
                ]
              : [
                  StyledComponentsClasses.MENU.LIST_ITEM_ICON,
                  ...getTypeWiseStyle(
                    menuItem,
                    allTypes?.MENU_ITEM_ICON,
                    allTypes
                  ),
                ]
          }
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
                  ? theme.palette.primary.light
                  : theme.palette.secondary.dark
              }!important`,
            }}
          />
        </NativeListItemIcon>
        <NativeListItemText
          disableTypography
          styleClasses={[
            StyledComponentsClasses.NAVIGATION.APP_DRAWER_TEXT,
            ...getTypeWiseStyle(menuItem, allTypes?.MENU_ITEM_TEXT, allTypes),
          ]}
          primary={menuItem.label}
          sx={{
            color: `${
              menuItem?.type === allTypes?.MENU_ITEM &&
              locationPathname === menuItem?.link
                ? theme.palette.primary.light
                : theme.palette.secondary.dark
            }!important`,
          }}
        />
      </NativeMenuItem>
    </NativeLink>
  ) : (
    <NativeLink
      href={
        menuItem?.type === allTypes?.MENU_ITEM && menuItem?.link
          ? menuItem?.link
          : "javascript:void(0)"
      }
    >
      <NativeIconButton
        title={menuItem?.label}
        titlePlacement={"right"}
        onClick={(e) => {
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
                ? theme.palette.primary.light
                : theme.palette.secondary.dark
            }!important`,
          }}
        ></NativeIcon>
      </NativeIconButton>
    </NativeLink>
  );
}

function getTypeWiseStyle(item, elemType, allTypes) {
  var styles = [];
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
