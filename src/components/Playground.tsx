import IDEEditor from "./IDEEditor";
import Controls from "./Controls";
import OutputConsole from "./OutputConsole";
const Playground = () => {
  return (
    <>
      <div className="flex flex-col w-3/5">
        <div className="flex h-7/8">
          <IDEEditor />
        </div>
        <div className="flex flex-rows h-1/8">
          <Controls />
          <OutputConsole />
        </div>
      </div>
    </>
  );
};

export default Playground;
