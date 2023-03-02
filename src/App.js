import "./App.css";
import { Provider } from "react-redux";
import CakeComponent from "./components/CakeComponent";
import IcecreamComponent from "./components/IcecreamComponent";
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";

function App() {
  return (
    //Provider connects the store to all the other components
    <Provider store={store}>
      <div className="App">
        <CakeComponent />
        <HooksCakeContainer />
        <IcecreamComponent />
      </div>
    </Provider>
  );
}

export default App;
