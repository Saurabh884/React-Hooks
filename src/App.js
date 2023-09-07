import "./App.css";
import ChildUseCallback from "./components/ChildUseCallback";
import HookCounter from "./components/HookCounter";
import HookCounterFive from "./components/HookCounterFive";
import HookCounterFour from "./components/HookCounterFour";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterTwo from "./components/HookCounterTwo";
import ParentComponent from "./components/ParentComponent";

function App() {
  return (
    <div className="App">
      <ParentComponent />
    </div>
  );
}

export default App;
