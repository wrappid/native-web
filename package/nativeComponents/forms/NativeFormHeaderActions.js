import React from "react";
import NativeIcon from "../dataDisplay/NativeIcon";
import NativeIconButton from "../inputs/NativeIconButton";

export default function NativeFormHeaderActions(props) {
  //TODO: add tooltop component to NativeIconButton with label
  // console.log("props", props);
  return props.action ? (
    Array.isArray(props.action) ? (
      props.action.map((ac) => (
        <NativeIconButton
          title={ac.title}
          disabled={ac.disable}
          onClick={() => {
            console.log("EDIT CLICK", props.id);
            ac.OnClick(props.id);
          }}
        >
          <NativeIcon>{ac.icon}</NativeIcon>
        </NativeIconButton>
      ))
    ) : (
      <NativeIconButton
        disabled={props.action.disable}
        title={props.action.title}
        onClick={props.action.OnClick}
      >
        <NativeIcon>{props.action.icon}</NativeIcon>
      </NativeIconButton>
    )
  ) : null;
}
