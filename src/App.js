import { BrowserRouter, Link } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import { HomeRouterW } from "./containers/HomeRouterW";
import { store } from "./rdx";
import { City_Units } from "./containers/City_Units";
import { Header } from "./containers/Header";
// import { SignOut } from "./components/authorization/SignOut";
// import { FormCity } from "./components/FormCity";
// import { SwitchUnits } from "./components/SwitchUnits ";
// import { Button } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Header></Header>
          <div>
            <br />
            <City_Units></City_Units>
            <br />
          </div>
          <HomeRouterW />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
/*компонент Provider созадет store*/
/*<Link to ={'edit/:id'} className={'LinkItem'}>Edit</Link>*/
