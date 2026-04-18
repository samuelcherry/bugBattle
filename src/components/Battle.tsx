import Inventory from "./Inventory";

const Battle = () => {
  return (
    <>
      <div className="flex flex-col bg-blue-400 w-1/5 h-screen">
        <img src="public\TK_monster.jpg" alt="monster battle ui" />
        <div className="flex h-full">
          <Inventory />
        </div>
      </div>
    </>
  );
};

export default Battle;
