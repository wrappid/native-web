/* eslint-disable no-console */
// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React, { Component } from "react";

import JSONEditor from "jsoneditor";

import "jsoneditor/dist/jsoneditor.css";
import NativeLabel from "../dataDisplay/paragraph/NativeLabel";

export default class NativeJSONEditor extends Component {
  state = { styleSet: false };
    
  componentDidMount() {
    let mode = "code";

    if (this.props.readOnly) {
      mode = "view";
    }
    const options = {
      mode        : mode,
      onChangeText: this.handelChange,
      schema      : this.props.schema || {},
    };

    this.jsoneditor = new JSONEditor(this.container, options);

    this.jsoneditor.set(this.props.value);
  }

  componentWillUnmount() {
    if (this.jsoneditor) {
      this.jsoneditor.destroy();
    }
  }

  componentDidUpdate() {
    this.jsonEditorValueUpdate(this.props.value);
    let elems = document.getElementsByClassName("jsoneditor-menu");

    console.log("ELEMs", elems, this.props?.theme);

    if(elems.length > 0 && !this.state.styleSet){
      for (let i = 0; i < elems?.length; i++) {
        elems[i].style.backgroundColor = this.props?.theme?.palette.primary.main;
      }
      this.setState({ styleSet: true });
    }

  }

  jsonEditorValueUpdate = (value = {}) => {
    if (this.jsoneditor) {
      let finalValue = value; 

      try {
        if (typeof finalValue === "string") {
          finalValue = JSON.parse(finalValue);
          this.jsoneditor.update(finalValue);
        }
      } catch (err) {
        // eslint-disable-next-line no-console
        console.warn("Not a valid json", err);
        this.jsoneditor.update(finalValue);
      }
    }
  };

  handelChange = (value) => {
    let finalValue = value; 

    if (typeof finalValue === "string") {
      try{
        finalValue = JSON.parse(finalValue);
      }
      catch(err){
        // eslint-disable-next-line no-console
        console.log("JSON NOT CORRECT");
        return;
      }
      if (this.props.formik) {
        this.props.formik.setFieldValue(this.props.id, finalValue);
      }
      this.props.onChange(finalValue);
    }

  };  

  render() {
    return (
      <>
        <NativeLabel>{this.props.label || "No Label Provided"}</NativeLabel>

        <div ref={(elem) => (this.container = elem)} />
      </>
    );
  }
}
