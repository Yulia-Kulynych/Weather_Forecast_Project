import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUser } from "../rdx/weatherSportUser/user/selectorsU";
import { SignOut } from "../components/authorization/SignOut";
import { Button } from "@mui/material";

export const Header = () => {
  const auth = useSelector(selectUser);
  console.log(auth);

  return (
    <div className="Header">
      {auth.userName == "" ? (
        <div>
          <Link to={"logIn"} className={"LinkItem"}>
            <Button variant="outlined" value="login" size="small">
              LogIn
            </Button>
          </Link>
        </div>
      ) : (
        <div>
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
          <SignOut>SignOut</SignOut>
        </div>
      )}
    </div>
  );
};
