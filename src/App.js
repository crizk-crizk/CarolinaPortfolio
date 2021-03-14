import "./App.css";
import { useState, useEffect } from "react";
import ViewCount from "./components/ViewCount";

//hooks must b defined on top and not used in conditionals (if, switch...etc)
//useMemo
function App() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log(counter);
  }, [counter]);

  return (
    <div className="App">
      <h1>My React Portfolio</h1>
      <ViewCount value="my number" sample={12} counter={counter} />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        click
      </button>
    </div>
  );
}

export default App;
