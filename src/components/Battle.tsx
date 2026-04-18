import Inventory from "./Inventory";

const Battle = () => {
  return (
    <>
      <div className="flex flex-col bg-blue-400 w-2/5">
        <img src="public\TK_monster.jpg" alt="monster battle ui" />
        <div className="flex h-1/5">
          <Inventory />
        </div>
      </div>
    </>
  );
};

export default Battle;
