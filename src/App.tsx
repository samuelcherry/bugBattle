import Playground from "./components/Playground";
import Battle from "./components/Battle";
import { useState } from "react";

function App() {
  const [damageTrigger, setDamageTrigger] = useState(0);

  const triggerDamage = () => {
    setDamageTrigger((prev) => prev + 1);
    console.log("damageTrigger: ", damageTrigger);
  };

  return (
    <>
      <div className="flex flex-rows w-full">
        <Playground onSuccess={triggerDamage} />
        <Battle damageTrigger={damageTrigger} />
      </div>
    </>
  );
}

export default App;
