import React from "react";
import { SCAutocomplete } from "../../inputs/SCAutocomplete";

export default function NativeAutocomplete(props) {
  return <SCAutocomplete {...props}>{props.children}</SCAutocomplete>;
}
