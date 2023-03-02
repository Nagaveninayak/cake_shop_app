import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import CakeComponent from "./components/CakeComponent";
import IcecreamComponent from "./components/IcecreamComponent";
import DynamicCakeContainer from "./components/DynamicCakeContainer";
import PropsItemContainer from "./components/PropsItemContainer";

function App() {
  return (
    //Provider connects the store to all the other components
    <Provider store={store}>
      <div className="App">
        <CakeComponent />
        <HooksCakeContainer />
        <IcecreamComponent />
        <DynamicCakeContainer />
        {/* for accessing cake */}
        <h5>Access via props</h5>
        <PropsItemContainer cake />
        <PropsItemContainer />
      </div>
    </Provider>
  );
}

export default App;
