import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import fs from "fs";
import path from "path";
type Props = {
  title: string;
  text: any;
};

function Collapse({ title, text }: Props) {
  const markdownFolder = path.resolve(process.cwd(), "public/markdown/faq");
  const item = fs
    .readFileSync(path.join(markdownFolder, "faq_1.md"))
    .toString();
  return (
    <div className="collapse-arrow rounded-box collapse border border-base-300 bg-white">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">{title}</div>
      <div className="collapse-content collapse-open">
        <div>
          <ReactMarkdown>{item}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default Collapse;
