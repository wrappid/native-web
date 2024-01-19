import { useEffect } from "react";

import NativeBox from "../../layouts/NativeBox";

export default function NativeGoogleButton() {

  useEffect(() => {
    // eslint-disable-next-line etc/no-commented-out-code
    {/*google.accounts.id.initialize({
      callback: handleCallbackResponse,
      client_id:
        "426471191334-634bndbk8912ktqhopf6hqropojgsoc2.apps.googleusercontent.com",
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      size : "large",
      theme: "outline",
    });
  */}}, []);

  return <NativeBox id="signInDiv"></NativeBox>;
}
