const OutputConsole = ({ output }: { output: string[] }) => {
  return (
    <div className="bg-black border-solid border-4 p-4 h-full overflow-auto">
      {output.map((line, i) => (
        <div key={i} className="text-sm">
          {line}
        </div>
      ))}
    </div>
  );
};

export default OutputConsole;
