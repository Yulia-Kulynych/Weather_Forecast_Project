import { useCallback, useState } from "react";
import { removeUser } from "../rdx/grocList/actionsUser";
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

  // return <input type="button" value="" onClick={onSignOutClick} />;
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
