import React, { useContext } from "react";
import { MarkdownContext } from "./MarkdownContext";

const Markdown = () => {
  const [text, setText] = useContext(MarkdownContext);
  return (
    <div className="col-md-6">
      <textarea
        className="form-control"
        id="editor"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: "100vw" }}
      ></textarea>
    </div>
  );
};

export default Markdown;
