import CounterComponent from "./CounterComponent";
import ListComponent from "./ListComponent";
import RenderComponent from "./RenderComponent";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RenderComponent />
        {/* <ListComponent /> */}
        {/* <CounterComponent /> */}
      </header>
    </div>
  );
}

export default App;
