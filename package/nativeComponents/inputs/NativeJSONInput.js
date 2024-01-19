// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import NativeInput from "./NativeInput";

export default function NativeJSONInput(props) {
  const { id, value = {}, formik, onChange } = props;
  const [JSONValue, setJSONValue] = React.useState(value);

  React.useEffect(() => {
    let tmpValue = value
      ? typeof value === "object"
        ? JSON.stringify(value, null, 4)
        : value
      : "{}";

    setJSONValue(value);
    formik?.setFieldValue(id, tmpValue);
  }, []);

  React.useEffect(() => {
    setJSONValue(value);
  }, [value]);

  const handleChange = (event) => {
    let finalValue = event.target.value;

    try {
      finalValue = JSON.parse(finalValue);
      finalValue = JSON.stringify(finalValue, null, 4);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Not a valid json", err);
    }
    if (formik) {
      formik.setFieldValue(id, finalValue);
    }
    setJSONValue(finalValue);

    // on change as props
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <NativeInput
      {...props}
      value={
        typeof JSONValue === "object"
          ? JSON.stringify(JSONValue, null, 4)
          : JSONValue
      }
      multiline={true}
      onChange={handleChange}
      inputProps={{ style: { resize: "vertical" } }}
    />
  );
}
