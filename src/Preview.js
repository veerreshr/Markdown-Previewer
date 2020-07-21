import React, { useContext } from "react";
import { MarkdownContext } from "./MarkdownContext";
const ReactMarkdown = require("react-markdown");

const Preview = () => {
  const [text] = useContext(MarkdownContext);
  return (
    <div className="col-md-6" id="preview">
      <ReactMarkdown source={text} />
    </div>
  );
};

export default Preview;
