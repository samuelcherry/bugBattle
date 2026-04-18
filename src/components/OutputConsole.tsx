const OutputConsole = ({ output }: { output: string[] }) => {
  return (
    <div className="bg-gray-900 p-4 h-40 overflow-auto">
      {output.map((line, i) => (
        <div key={i} className="text-sm">
          {line}
        </div>
      ))}
    </div>
  );
};

export default OutputConsole;
