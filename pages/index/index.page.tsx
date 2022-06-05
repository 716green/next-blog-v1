import React from "react";
import ReactMarkdown from "react-markdown";

// Imitate a call pulling data from Firestore
import { md1 } from "./markdownSamples";

const markdown: string = md1;

const Page = () => {
  return (
    <>
      <h1>Index Page</h1>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </>
  );
};

export default Page;
