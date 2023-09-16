import React, {useEffect, useState} from "react";
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

  const [defOptions, setDefaultOptions] = useState([])


  useEffect(()=>{
    setMountOptions()
  }, [value])

  const setMountOptions=async ()=>{
    let ops = await loadOptions()
    setDefaultOptions(ops)
  }

  return (
    <AsyncSelect
      components={components}
      styles={customStyle}
      placeholder={placeholder}
      onChange={onChange}
      isMulti={isMulti}
      loadOptions={loadOptions}
      onKeyDown={onKeyDown}
      defaultOptions={defOptions&&defOptions?.length>0?defOptions: defaultOptions}
      value={value}
      inputValue={inputValue}
      onInputChange={onInputChange}
    />
  );
}
