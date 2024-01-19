// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

export default function NativeFormContainer(props) {
  return <form {...props}>{props.children}</form>;
}
