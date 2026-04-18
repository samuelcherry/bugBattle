import { useState } from "react";
import Editor from "@monaco-editor/react";
import OutputConsole from "./OutputConsole";

const IDEEditor = () => {
  const [code, setCode] = useState(`function test() {
    console.log("Hello World");
    }
    
  test();`);

  const [output, setOutput] = useState<string[]>([]);

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

  return (
    <div className="flex flex-col w-full h-full bg-black text-white">
      {/* Editor */}
      <div className="h-96 border-b border-gray-700">
        <Editor
          height="100%"
          defaultLanguage="javascript"
          value={code}
          onChange={(value) => setCode(value || "")}
          theme="vs-dark"
        />
      </div>

      {/* Controls */}
      <div className="p-2">
        <button onClick={runCode} className="bg-green-600 px-4 py-2 rounded">
          RUN
        </button>
      </div>

      {/* Output */}
      <OutputConsole output={output} />
    </div>
  );
};

export default IDEEditor;
