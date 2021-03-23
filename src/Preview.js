import React, { useContext } from "react";
import { MarkdownContext } from "./MarkdownContext";
const ReactMarkdown = require("react-markdown");
const gfm = require("remark-gfm");
const Preview = () => {
  const [text] = useContext(MarkdownContext);
  return (
    <div className=" col-md-5 m-1  rounded">
      <h4 className="text-center p-1">Previewer</h4>
      <div id="preview" className="p-2">
        <ReactMarkdown source={text} plugins={[gfm]} />
      </div>
    </div>
  );
};

export default Preview;
