import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../rdx/weatherSportUser/user/selectorsU";

export const RequireAuth = ({ children }) => {
  const location = useLocation();

  const auth = useSelector(selectUser);
  console.log(auth);

  if (auth.userName == "") {
    return <Navigate to="../logIn" from state={{ from: location }} />;
  }

  return children;
};
