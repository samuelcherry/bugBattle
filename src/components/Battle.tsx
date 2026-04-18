import { useState, useEffect } from "react";
import Inventory from "./Inventory";

const Battle = ({ damageTrigger }: { damageTrigger: number }) => {
  const [isDamaged, setIsDamaged] = useState(false);

  useEffect(() => {
    if (damageTrigger === 0) return;

    setIsDamaged(true);
    const timer = setTimeout(() => setIsDamaged(false), 300);

    return () => clearTimeout(timer);
  }, [damageTrigger]);

  useEffect(() => {
    console.log("isDamaged changed:", isDamaged);
  }, [isDamaged]);

  return (
    <>
      <div className="flex flex-col w-1/5 h-screen">
        <div className="bg-testcolor">TEST</div>
        <img
          src="/TK_monster.jpg"
          alt="monster battle ui"
          className="animate-bounce-x"
          //className={isDamaged ? "animate-bounce-x" : ""}
        />
        <div className="flex h-full">
          <Inventory />
        </div>
      </div>
    </>
  );
};

export default Battle;
