import React from "react";

import "./App.css";
import Preview from "./Preview";
import { MarkdownProvider } from "./MarkdownContext";
import Markdown from "./Markdown";

function App() {
  return (
    <MarkdownProvider>
      <div className="container-fluid ">
        <div className="row">
          <Markdown />
          <Preview />
        </div>
      </div>
    </MarkdownProvider>
  );
}

export default App;
