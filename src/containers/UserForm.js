import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { addNewUser } from "../rdx/grocList/actionsUser";
import { selectUser } from "../rdx/grocList/selectorsU";
import { useLocation, useNavigate } from "react-router-dom";

export const UserForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || "/";

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
      } else console.log("input valid email");
    },
    [userName, lastName, email, phone, password, dispatch]
  );

  return (
    <form onSubmit={onSubmit}>
      {/* <div> you get from {fromPage}</div> */}
      <br />
      <br />
      <div>Please logIn to check the forecast</div>
      <div>Name:</div>
      <input
        type="text"
        value={userName}
        onChange={onUserNameChanged}
        placeholder="Name"
        required
      />
      <br />
      <div>Last Name:</div>
      <input
        type="text"
        value={lastName}
        onChange={onLastNameChanged}
        required
        placeholder="LastName"
      />
      <br />
      <div>E-mail:</div>
      <input
        type="text"
        value={email}
        onChange={onEmailChanged}
        required
        placeholder="NameLastName@gmail.com"
      />{" "}
      {email && !validEmail && (
        <span className="error">Enter a valid email</span>
      )}
      <br />
      <div>Phone:</div>
      <input
        type="text"
        value={phone}
        onChange={onPhoneChanged}
        required
        pattern="+[0-9]"
        placeholder="+380990000000"
      />
      <br />
      <div>Password:</div>
      <input
        type="password"
        value={password}
        onChange={onPasswordChanged}
        required
      />
      <br />
      <input type={"submit"} value={"Submit"} />
    </form>
  );
};
