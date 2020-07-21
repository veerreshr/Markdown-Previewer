import React, { useContext } from "react";
import { MarkdownContext } from "./MarkdownContext";

const Markdown = () => {
  const [text, setText] = useContext(MarkdownContext);
  return (
    <div className="col-md-5 m-1 ">
      <h4 className="text-center p-1">Editor</h4>
      <textarea
        className="form-control"
        id="editor"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
    </div>
  );
};

export default Markdown;
