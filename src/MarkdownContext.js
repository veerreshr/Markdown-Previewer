import React, { createContext, useState } from "react";

export const MarkdownContext = createContext();

export const MarkdownProvider = (props) => {
  const [text, setText] = useState("");
  return (
    <MarkdownContext.Provider value={[text, setText]}>
      {props.children}
    </MarkdownContext.Provider>
  );
};
