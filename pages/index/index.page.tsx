import React from "react";
import ReactMarkdown from "react-markdown";

// Imitate a call pulling data from Firestore
import { markdownSample } from "./markdownSample";

const markdown: string = markdownSample();

const Page = () => {
  return (
    <>
      <h1>Index Page</h1>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </>
  );
};

export default Page;
