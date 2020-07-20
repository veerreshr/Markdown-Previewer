import React from "react";

import "./App.css";
const ReactMarkdown = require("react-markdown");

function App() {
  const input = "# This is a header\n\nAnd this is a paragraph";
  return <ReactMarkdown source={input} />;
}

export default App;
