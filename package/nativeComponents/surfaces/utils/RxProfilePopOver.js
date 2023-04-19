import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import config from "./../../config/config";
import RxEmailLink from "./RxEmailLink";
import RxPhoneLink from "./RxPhoneLink";
import { ENV_STAGE_MODE, urls, ENV_DEV_MODE } from "../../config/constants";
import { MENU_SEPERATOR } from "../../config/menuConstants";
import NativeAvatar from "../../Native/components/surfaces/NativeAvatar";
import NativeDivider from "../../Native/components/surfaces/NativeDivider";
import NativeTypographyBody1 from "../../Native/components/surfaces/paragraph/NativeTypographyBody1";
import { NativeMenu } from "../../Native/components/inputs/NativeMenu";
import NativeBox from "../../Native/components/layouts/NativeBox";
import NativeGrid from "../../Native/components/layouts/NativeGrid";
import CoreClasses from "../../Native../../Native/styles/CoreClasses";
import ApiVersion from "../../module/app/ApiVersion";
import { getFullName } from "../../utils/helper";

export default function RxProfilePopOver(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const profile = useSelector((state) => state.profile);
  const { firstName = "", middleName = "", lastName = "" } = profile?.basic;
  const { onClose } = props;
  const profileCardMenu = [
    {
      icon: "person_outline",
      id: "viewProfile",
      label: "View Profile",
      link: urls.PROFILE,
    },
    {
      icon: "settings",
      id: "settings",
      label: "Settings",
      link: urls.SETTINGS,
    },
    { type: MENU_SEPERATOR },
    {
      icon: "logout",
      id: "logout",
      label: "Logout",
      link: urls.LOGOUT,
    },
  ];

  const OnMenuClick = (item) => {
    navigate(item.link);
    onClose();
  };

  return (
    <NativeBox sx={{ width: "400px" }}>
      <NativeGrid
        styleClasses={[
          CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
          CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
          CoreClasses.LAYOUT.FULL_WIDTH,
          CoreClasses.PADDING.P1,
        ]}
      >
        <NativeAvatar
          gridProps={{ gridSize: 2 }}
          styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_MEDIUM]}
          src={auth?.photo ? auth?.photo : "photo.jpg"}
        />

        <NativeBox gridProps={{ gridSize: 10 }}>
          <NativeTypographyBody1 hideSeeMore={true} limitChars={30}>
            {getFullName({ firstName, lastName, middleName })}
          </NativeTypographyBody1>

          {profile?.contact?.email && profile?.contact?.email !== "" && (
            <RxEmailLink
              email={profile?.contact?.email}
              verified={profile?.basic?.emailVerified}
            />
          )}

          {profile?.contact?.phone && profile?.contact?.phone !== "" && (
            <RxPhoneLink
              phone={profile?.contact?.phone}
              verified={profile?.basic?.phoneVerified}
            />
          )}
        </NativeBox>
      </NativeGrid>

      <NativeDivider />

      <NativeMenu
        menu={profileCardMenu}
        miniDrawer={false}
        multiLevel={false}
        open={true}
        OnMenuClick={OnMenuClick}
      />

      {config.environment === ENV_DEV_MODE ||
        (config.environment === ENV_STAGE_MODE && (
          <>
            <NativeDivider />

            <NativeBox
              styleClasses={[
                CoreClasses.PADDING.P2,
                CoreClasses.BG.BG_BLACK,
                CoreClasses.COLOR.TEXT_WHITE,
              ]}
            >
              <ApiVersion />
            </NativeBox>
          </>
        ))}
    </NativeBox>
  );
}
