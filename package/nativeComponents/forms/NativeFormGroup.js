import { SCFormGroup } from "../../dataDisplay";

export default function NativeFormGroup(props) {
  return <SCFormGroup {...props}>{props.children}</SCFormGroup>;
}
