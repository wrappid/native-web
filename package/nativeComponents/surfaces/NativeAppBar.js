import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import HelpAndSupportPopOver from "./utils/HelpAndSupportPopOver";
import NotificationPopOver from "./utils/NotificationPopOver";
import QuickAddPopOver from "./utils/QuickAddPopOver";
// import RxProfilePopOver from "./utils/RxProfilePopOver";
import { urls } from "../../config/constants";
import NativeAvatar from "../surfaces/NativeAvatar";
import NativeIcon from "../surfaces/NativeIcon";
import NativeImage from "../surfaces/NativeImage";
import NativeIconButton from "../inputs/NativeIconButton";
import NativeStack from "../layouts/NativeStack";
import NativeToolbar from "../surfaces/NativeToolbar";
import NativePopover from "../utils/NativePopover";
import { CoreClasses } from "@wrappid/styles";
import { getSettingMeta } from "../../store/action/mdmAction";
import { SCAppBar } from "../../surfaces/SCAppBar";

export default function NativeAppBar(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const mdm = useSelector((state) => state.mdm);
  const [getSettingMetaFlag, setGetSettingMetaFlag] = useState(false);
  const { handleDrawer } = props;

  const appbarPopOver = {
    HELP_SUPPORT: "HELP_SUPPORT",
    NOTIFICATION: "NOTIFICATION",
    PROFILE: "PROFILE",
    QUICK_MENU: "QUICK_MENU",
  };

  useEffect(() => {
    if (getSettingMetaFlag) {
      if (mdm.getSettingMetaSuccess) {
        setGetSettingMetaFlag(false);
      }
      dispatch(getSettingMeta(null, auth.accessToken));
    }
  }, [
    getSettingMetaFlag,
    mdm.getSettingMetaSuccess,
    dispatch,
    auth.accessToken,
  ]);

  /* AppBar PopOver */
  const [_appbarPopOverAnchorEl, set_appbarPopOverAnchorEl] =
    React.useState(null);
  // const _appbarPopoverOpen = Boolean(_appbarPopOverAnchorEl);
  const _appbarID = "appbar-popover";
  const [_appbarContent, set_appbarContent] = React.useState(null);
  const handleAppbarPopOverClose = (e) => {
    set_appbarContent(null);
    set_appbarPopOverAnchorEl(null);
  };
  const handleAppbarPopOverOpen = (e, appBarPopOverCons) => {
    set_appbarContent(appBarPopOverCons);
    set_appbarPopOverAnchorEl(e.currentTarget);
  };

  return (
    <>
      <SCAppBar auth={auth} position="fixed">
        <NativeToolbar
          styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN]}
        >
          <NativeStack direction="row">
            <NativeIconButton
              aria-label="open drawer"
              onClick={handleDrawer}
              edge="start"
              disabled={!auth?.uid}
              sx={{ marginLeft: "-16px" }}
            >
              <NativeIcon>menu</NativeIcon>
            </NativeIconButton>

            <NativeImage
              src="/images/logo.png"
              alt="Rxefy Logo"
              onClick={() => {
                navigate(`/${urls.DASHBOARD}`);
              }}
              styleClasses={[CoreClasses.Native_APP_BAR.APP_BAR_LOGO]}
            />
          </NativeStack>

          {auth && auth.uid && (
            <NativeStack
              direction="row"
              NativeId="appBarMenuGrid"
              styleClasses={[
                CoreClasses.WIDTH.W_100,
                CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_FLEX_END,
              ]}
            >
              {mdm?.settingMeta?.find((f) => f.name === "appBarWalet")?.value
                ?.flag && (
                <NativeIconButton>
                  <NativeIcon>account_balance_wallet_outlinedIcon</NativeIcon>
                </NativeIconButton>
              )}

              {mdm?.settingMeta?.find((f) => f.name === "appBarHelp")?.value
                ?.flag && (
                <NativeIconButton
                  title={"Help & Support"}
                  onClick={(e) => {
                    console.log("Help & Support clicked");
                    handleAppbarPopOverOpen(e, appbarPopOver.HELP_SUPPORT);
                  }}
                >
                  <NativeIcon>help_outline</NativeIcon>
                </NativeIconButton>
              )}

              {mdm?.settingMeta?.find((f) => f.name === "appBarNotification")
                ?.value?.flag && (
                <NativeIconButton
                  title={"Show Notification"}
                  onClick={(e) => {
                    console.log("Notification clicked");
                    handleAppbarPopOverOpen(e, appbarPopOver.NOTIFICATION);
                  }}
                >
                  <NativeIcon>notifications_none_outlined</NativeIcon>
                </NativeIconButton>
              )}

              {mdm?.settingMeta?.find((f) => f.name === "appBarAdd")?.value
                ?.flag && (
                <NativeIconButton
                  title={"Quick Menu"}
                  onClick={(e) => {
                    console.log("Quick Menu clicked");
                    handleAppbarPopOverOpen(e, appbarPopOver.QUICK_MENU);
                  }}
                >
                  <NativeIcon>add_circle_outlined</NativeIcon>
                </NativeIconButton>
              )}

              <NativeIconButton
                onClick={(e) => {
                  console.log("Profile clicked");
                  handleAppbarPopOverOpen(e, appbarPopOver.PROFILE);
                }}
              >
                <NativeAvatar
                  src={auth?.photo ? auth?.photo : "photo.jpg"}
                  styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_SMALL]}
                />
              </NativeIconButton>
            </NativeStack>
          )}
        </NativeToolbar>
      </SCAppBar>

      {/* AppBar PopOver */}
      {_appbarContent && (
        <NativePopover
          id={_appbarID}
          open={_appbarPopOverAnchorEl != null}
          anchorEl={_appbarPopOverAnchorEl}
          onClose={handleAppbarPopOverClose}
          anchorOrigin={{
            horizontal: "left",
            vertical: "bottom",
          }}
        >
          {_appbarContent === appbarPopOver.HELP_SUPPORT ? (
            <>
              {/* Help & Support Popover */}
              <HelpAndSupportPopOver onClose={handleAppbarPopOverClose} />
            </>
          ) : _appbarContent === appbarPopOver.NOTIFICATION ? (
            <>
              {/* Notifications Popover */}
              <NotificationPopOver />
            </>
          ) : _appbarContent === appbarPopOver.QUICK_MENU ? (
            <>
              {/* Add Popover */}
              <QuickAddPopOver onClose={handleAppbarPopOverClose} />
            </>
          ) : _appbarContent === appbarPopOver.PROFILE ? (
            <>
              {/* Add Popover */}
              {/* <RxProfilePopOver onClose={handleAppbarPopOverClose} /> */}
            </>
          ) : (
            <></>
          )}
        </NativePopover>
      )}
    </>
  );
}
