import HelloWorldComponent from "./HelloWorldComponent";
import MyClassComponent from "./MyClassComponent";
import "./App.css";

function App() {
  const hello = "Hello User!";
  const component = "functional";
  return (
    <div className="App">
      <header className="App-header">
        <p>{hello}</p>
        {component == "functional" ? <HelloWorldComponent /> : <MyClassComponent />}
      </header>
    </div>
  );
}

export default App;
