import { BrowserRouter, Link } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import { HomeRouterW } from "./containers/HomeRouterW";
import { store } from "./rdx";
import { FormCity } from "./components/FormCity";
import { SignOut } from "./containers/authorization/SignOut";
import { SwitchUnits } from "./components/SwitchUnits ";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <div className="Header">
            <Link to={"history"} className={"LinkItem"}>
              Hystory
            </Link>
            <Link to={"/"} className={"LinkItem"}>
              {/* <Link to={"home"} className={"LinkItem"}> */}
              Today
            </Link>
            <Link to={"forecast"} className={"LinkItem"}>
              Forecast
            </Link>
            <Link to={"sport"} className={"LinkItem"}>
              Sport
            </Link>
            <Link to={"logIn"} className={"LinkItem"}>
              {/* <Link to={"/"} className={"LinkItem"}> */}
              LogIn
            </Link>
            <SignOut>SignOut</SignOut>
          </div>
          <div>
            <br />
            <FormCity>City</FormCity>
            <SwitchUnits />
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
