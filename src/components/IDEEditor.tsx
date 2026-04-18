import { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import OutputConsole from "./OutputConsole";
import { validateCode } from "../validateCode";
import { codeSnippets } from "../codeSnippets";

const IDEEditor = () => {
  const [code, setCode] = useState<string>("");

  const [output, setOutput] = useState<string[]>([]);
  const [currentSnippetKey, setCurrentSnippetKey] = useState<string | null>(
    null,
  );

  const loadRandomSnippet = () => {
    const keys = Object.keys(codeSnippets);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];

    setCurrentSnippetKey(randomKey);
    setCode(codeSnippets[randomKey].code);
    setOutput([]);
  };

  const runValidation = () => {
    if (!currentSnippetKey) return;

    const snippet = codeSnippets[currentSnippetKey];

    const result = validateCode(code, snippet.functionName, snippet.tests);

    setOutput(result.results);

    if (result.passed) {
      console.log("All tests passed!");
    }
  };

  const runCode = () => {
    const logs: string[] = [];

    const originalLog = console.log;
    const originalError = console.error;

    try {
      console.log = (...args) => {
        logs.push(args.join(" "));
      };

      console.error = (...args) => {
        logs.push("ERROR: " + args.join(" "));
      };

      new Function(code)();
    } catch (err: any) {
      logs.push("EXCEPTION: " + err.message);
    }

    console.log = originalLog;
    console.error = originalError;

    setOutput(logs);
  };

  const runAll = () => {
    runCode();
    runValidation();
  };

  useEffect(() => {
    const snippetKeys = Object.keys(codeSnippets);
    const randomKey =
      snippetKeys[Math.floor(Math.random() * snippetKeys.length)];

    setCurrentSnippetKey(randomKey);
    setCode(codeSnippets[randomKey].code);
  }, []);

  return (
    <div className="flex flex-col w-full h-full bg-black text-white">
      {/* Editor */}
      <div className="h-7/10 border-b border-gray-700">
        <Editor
          height="100%"
          defaultLanguage="javascript"
          value={code}
          onChange={(value) => setCode(value || "")}
          theme="vs-dark"
        />
      </div>

      {/* Controls */}
      <div className="flex flex-row bg-gray-900">
        <div className="p-2">
          <button onClick={runAll} className="bg-green-600 px-4 py-2 rounded">
            RUN
          </button>
        </div>

        <div className="p-2">
          <button
            onClick={runValidation}
            className="bg-amber-400 px-4 py-2 rounded"
          >
            SUBMIT
          </button>
        </div>
      </div>
      {/* Output */}
      <div className="h-3/10">
        <OutputConsole output={output} />
      </div>
    </div>
  );
};

export default IDEEditor;
