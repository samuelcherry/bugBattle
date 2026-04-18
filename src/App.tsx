import Playground from "./components/Playground";
import Battle from "./components/Battle";

function App() {
  return (
    <>
      <div className="flex flex-rows w-full">
        <Playground />
        <Battle />
      </div>
    </>
  );
}

export default App;
