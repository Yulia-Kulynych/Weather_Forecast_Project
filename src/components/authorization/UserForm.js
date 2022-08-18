import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { addNewUser } from "../../rdx/weatherSportUser/user/actionsUser";
import { selectUser } from "../../rdx/weatherSportUser/user/selectorsU";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

import "./UserForm.css";

export const UserForm = () => {
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const user = useSelector(selectUser);

  const [userName, setUserName] = useState("");

  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const onUserNameChanged = useCallback(
    (event) => {
      setUserName(event.target.value);
      console.log(userName);
    },
    [setUserName]
  );

  const onLastNameChanged = useCallback(
    (event) => {
      setLastName(event.target.value);
    },
    [setLastName]
  );
  const onEmailChanged = useCallback(
    (event) => {
      setEmail(event.target.value);
      const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (
        // event.target.value.match(mailformat) &&
        mailformat.test(event.target.value) === true
      ) {
        setValidEmail(true);
        console.log("mail is valid");
      } else {
        setValidEmail(false);
        console.log("input valid email");
      }
    },
    [setEmail]
  );
  const onPhoneChanged = useCallback(
    (event) => {
      setPhone(event.target.value);
    },
    [setPhone]
  );
  const onPasswordChanged = useCallback(
    (event) => {
      setPassword(event.target.value);
    },
    [setPassword]
  );
  const logInUserData = {
    userName,
    lastName,
    email,
    phone,
    password,
  };

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();

      if (validEmail) {
        localStorage.setItem("userData", JSON.stringify(logInUserData));
        console.log(localStorage.getItem("userData"));
        dispatch(addNewUser(logInUserData));
        navigate("/", { replace: true });
      } else console.log("input valid email");
    },
    [userName, lastName, email, phone, password, dispatch]
  );

  return (
    <form className="userForm" onSubmit={onSubmit}>
      {/* <div> you get from {fromPage}</div> */}
      <div className="title">Please LogIn </div>
      {/* to check the forecast */}
      <br />
      {/* <div>Name:</div> */}
      <input
        type="text"
        value={userName}
        onChange={onUserNameChanged}
        placeholder="Name"
        required
      />
      <br />
      <br />
      {/* <div>Last Name:</div> */}
      <input
        type="text"
        value={lastName}
        onChange={onLastNameChanged}
        required
        placeholder="LastName"
      />
      <br />
      <br />
      {/* <div>E-mail:</div> */}
      <input
        type="text"
        value={email}
        onChange={onEmailChanged}
        required
        placeholder="E-mail: NameLastName@gmail.com"
      />
      {email && !validEmail && (
        <span className="error">Enter a valid email</span>
      )}
      <br />
      <br />
      {/* <div>Phone:</div> */}
      <input
        type="text"
        value={phone}
        onChange={onPhoneChanged}
        required
        pattern="+[0-9]"
        placeholder="Phone: +380990000000"
      />
      <br />
      <br />
      {/* <div>Password:</div> */}
      <input
        type="password"
        value={password}
        onChange={onPasswordChanged}
        required
        placeholder="Password"
      />
      <br /> <br />
      {/* <input type={"submit"} value={"LogIn"} /> */}
      <Button
        type="submit"
        variant="contained"
        size="small"
        value={"LogIn"}
        className="login_btn"
      >
        LogIn
      </Button>
    </form>
  );
};
