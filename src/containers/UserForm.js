import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { addNewUser } from "../rdx/grocList/actionsUser";
// import { useParams } from "react-router-dom";
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
      //
      localStorage.setItem("userData", JSON.stringify(logInUserData));
      console.log(localStorage.getItem("userData"));

      dispatch(addNewUser(logInUserData));
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
        required
      />
      <br />

      <div>Last Name:</div>
      <input
        type="text"
        value={lastName}
        onChange={onLastNameChanged}
        required
      />
      <br />

      <div>E-mail:</div>
      <input type="text" value={email} onChange={onEmailChanged} required />
      <br />

      <div>Phone:</div>
      <input type="text" value={phone} onChange={onPhoneChanged} required />
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
// /*<div>Id:</div>
//         <input value = {product.id} onChange={onIdChanged}/>
//         <br />*/
//   useEffect(
//     (event) => {
//       if (user) {
//         userName(user.userName);
//         setLastName(user.userName);
//         setEmail(user.email);
//         setPhone(user.phone);
//         setPassword(user.password);
//       }
//     },
//     [user]
//   );

// //     dispatch(
//     addNewUser({
//         //   userName,
//           //   lastName,
//           //   email,
//           //   phone,
//           //   password,
//           // }

//       )
//     );
//   },
//   [userName, lastName, email, phone, password, dispatch]
// );{
