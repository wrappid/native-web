import React, { useEffect } from "react";
import { NativeBox } from "../../layouts/NativeBox";

export default function NativeGoogleButton() {

  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        "426471191334-634bndbk8912ktqhopf6hqropojgsoc2.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  return <NativeBox id="signInDiv"></NativeBox>;
}
