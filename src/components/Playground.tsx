import IDEEditor from "./IDEEditor";

const Playground = ({ onSuccess }: { onSuccess: () => void }) => {
  return (
    <>
      <div className="flex flex-col w-4/5">
        <IDEEditor onSuccess={onSuccess} />
      </div>
    </>
  );
};

export default Playground;
