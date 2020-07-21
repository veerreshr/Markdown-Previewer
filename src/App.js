import React from "react";

import "./App.css";
import Preview from "./Preview";
import { MarkdownProvider } from "./MarkdownContext";
import Markdown from "./Markdown";

function App() {
  return (
    <MarkdownProvider>
      <div className="container-fluid  ">
        <h2 className="text-center p-2">Markdown Previewer</h2>
        <div className="row mt-2 ml-md-5">
          <Markdown />
          <div className="col-md-1"></div>
          <Preview />
        </div>
      </div>
    </MarkdownProvider>
  );
}

export default App;
