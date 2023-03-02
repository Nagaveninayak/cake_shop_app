import "./App.css";
import { Provider } from "react-redux";
import CakeComponent from "./components/CakeComponent";
import IcecreamComponent from "./components/IcecreamComponent";
import DynamicCakeContainer from "./components/DynamicCakeContainer";
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
        <DynamicCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
