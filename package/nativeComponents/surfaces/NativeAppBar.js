import React from "react";

import { useNavigate } from "react-router-dom";

import NativeIcon from "../dataDisplay/NativeIcon";
import NativeImage from "../dataDisplay/NativeImage";
import NativeIconButton from "../inputs/NativeIconButton";
import NativeStack from "../layouts/NativeStack";
import NativeToolbar from "../surfaces/NativeToolbar";
import { CoreClasses } from "@wrappid/styles";
import { SCAppBar } from "../../surfaces/SCAppBar";

export default function NativeAppBar(props) {
  const navigate = useNavigate();
  const { handleDrawer, navigateString, rightAppbarMenu, auth } = props;

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
                navigate(navigateString);
              }}
              styleClasses={[CoreClasses.Native_APP_BAR.APP_BAR_LOGO]}
            />
          </NativeStack>

          {rightAppbarMenu}
        </NativeToolbar>
      </SCAppBar>
    </>
  );
}
