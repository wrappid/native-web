import { SCFormGroup } from "../../styledComponents/inputs/SCFormGroup";

export default function NativeFormGroup(props) {
  return <SCFormGroup {...props}>{props.children}</SCFormGroup>;
}
