import CounterComponent from "./CounterComponent";
import ListComponent from "./ListComponent";
import RenderComponent from "./RenderComponent";
import MyClassComponent from "./MyClassComponent";
import { useState } from "react";

import "./App.css";

function App() {
  const [isShowTimer, setIsShowTimer] = useState(false);
  // const isShowTimer = false;
  return (
    <div className="App">
      <header className="App-header">
        {/* <RenderComponent /> */}
        {/* <CounterComponent /> */}
        {isShowTimer ? <MyClassComponent /> : <ListComponent />}
        <button onClick={() => setIsShowTimer((prev) => !prev)}>Show timer</button>
      </header>
    </div>
  );
}

export default App;
