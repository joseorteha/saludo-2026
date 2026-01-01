import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import "github-markdown-css"; 

const Readme: React.FC = () => {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    fetch("/README.md")
      .then((response) => response.text())
      .then((text) => setContent(text))
      .catch((error) => console.error("Error loading README.md:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-orange-50 flex flex-col p-4 relative overflow-hidden">
      <div className="container mx-auto px-4 py-8">
        <div className="markdown-body bg-black p-6 md:p-10 rounded-lg shadow-md">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default Readme;
