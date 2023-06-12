import React from "react";
import AsyncSelect from "react-select/async";

export default function NativeMedicineSelector(props) {
  const {
    components,
    customStyle,
    placeholder,
    onChange,
    isMulti,
    loadOptions,
    onKeyDown,
    defaultOptions,
    value,
    inputValue,
    onInputChange,
  } = props;
  return (
    <AsyncSelect
      components={components}
      styles={customStyle}
      placeholder={placeholder}
      onChange={onChange}
      isMulti={isMulti}
      loadOptions={loadOptions}
      onKeyDown={onKeyDown}
      defaultOptions={defaultOptions}
      value={value}
      inputValue={inputValue}
      onInputChange={onInputChange}
    />
  );
}
