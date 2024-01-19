// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React, { Component } from "react";

import JSONEditor from "jsoneditor";

import "jsoneditor/dist/jsoneditor.css";
import NativeLabel from "../dataDisplay/paragraph/NativeLabel";

export default class NativeJSONEditor extends Component {
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
  }

  jsonEditorValueUpdate = (value = {}) => {
    if (this.jsoneditor) {
      let finalValue = value;

      try {
        if (typeof finalValue === "string") {
          finalValue = JSON.parse(finalValue);
        }
        this.jsoneditor.update(this.props.value);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.warn("Not a valid json", err);
      }
    }
  };

  getValue = () => {
    let value = this.props.value;

    return value;
  };

  handelChange = (value) => {
    if (this.props.formik) {
      this.props.formik.setFieldValue(this.props.id, value);
    }
    this.props.onChange(JSON.parse(value));
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
