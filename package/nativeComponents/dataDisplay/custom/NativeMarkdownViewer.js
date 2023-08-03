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
    )
}
