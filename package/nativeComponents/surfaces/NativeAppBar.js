import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { urls } from "../../config/constants";
import NativeIcon from "../surfaces/NativeIcon";
import NativeImage from "../surfaces/NativeImage";
import NativeIconButton from "../inputs/NativeIconButton";
import NativeStack from "../layouts/NativeStack";
import NativeToolbar from "../surfaces/NativeToolbar";
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

          {props.rightAppbarMenu}
        </NativeToolbar>
      </SCAppBar>
    </>
  );
}
