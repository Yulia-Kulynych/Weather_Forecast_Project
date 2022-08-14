import { useCallback } from "react";
import { removeUser } from "../../rdx/weatherSportUser/user/actionsUser";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux/es/exports";

export const SignOut = () => {
  const dispatch = useDispatch();

  const onSignOutClick = useCallback(
    (event) => {
      event.preventDefault();
      localStorage.removeItem("userData");
      console.log(localStorage.getItem("userData"));

      dispatch(removeUser());
    },
    [dispatch]
  );

  return (
    <Button
      variant="outlined"
      value="SignOut"
      size="small"
      onClick={onSignOutClick}
    >
      SignOut
    </Button>
  );
};
//
