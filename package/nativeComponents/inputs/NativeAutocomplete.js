import React from "react";
import { SCAutocomplete } from "../../styledComponents/inputs/SCAutocomplete";

export default function NativeAutocomplete(props) {
  return <SCAutocomplete {...props}>{props.children}</SCAutocomplete>;
}
