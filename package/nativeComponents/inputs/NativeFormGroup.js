import { SCFormGroup } from "../../inputs/SCFormGroup";

export default function NativeFormGroup(props) {
  return <SCFormGroup {...props}>{props.children}</SCFormGroup>;
}
