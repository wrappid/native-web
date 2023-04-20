import React from "react";

export default function NativeFormContainer(props) {
  return <form {...props}>{props.children}</form>;
}
