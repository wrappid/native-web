// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import ReactMarkdown from "react-markdown";

export default function NativeMarkdownViewer() {
  const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`;

  return (
    <ReactMarkdown>{markdown}</ReactMarkdown>
  );
}
