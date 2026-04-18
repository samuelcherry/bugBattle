const Controls = () => {
  return (
    <>
      <div className="flex flex-col bg-gray-800 w-full ">
        <div className="flex text-white">
          <button className="w-80 h-20 bg-slate-900 rounded-lg p-4 m-4 drop-shadow-lg">
            SUBMIT
          </button>
          <button className="w-80 h-20 bg-slate-900 rounded-lg p-4 m-4 drop-shadow-lg">
            RUN
          </button>
        </div>
      </div>
    </>
  );
};

export default Controls;
