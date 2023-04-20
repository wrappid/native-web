import { SCFormControlLabel } from "../../inputs/SCFormControlLabel";

export default function NativeFormControlLabel(props) {
  return <SCFormControlLabel {...props}>{props.children}</SCFormControlLabel>;
}
