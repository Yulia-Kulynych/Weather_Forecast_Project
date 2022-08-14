import { Routes, Route } from "react-router-dom";
import { HomeW } from "./HomeW";
import { History } from "./History";
import { Forecast } from "./Forecast";
import { Sport } from "./Sport";
import { UserForm } from "../components/authorization/UserForm";
import { RequireAuth } from "../components/authorization/RequireAuth";

export const HomeRouterW = () => {
  //функція яка повертає JSX
  return (
    // <AuthProvide>
    <Routes>
      {/* <Route path="/home" element={<HomeW />} /> */}
      <Route
        path="/"
        element={
          <RequireAuth>
            <HomeW />
          </RequireAuth>
        }
      />
      <Route
        path="/history"
        element={
          <RequireAuth>
            <History />
          </RequireAuth>
        }
      />
      <Route
        path="/forecast"
        element={
          <RequireAuth>
            <Forecast />
          </RequireAuth>
        }
      />
      <Route
        path="/sport"
        element={
          <RequireAuth>
            <Sport />
          </RequireAuth>
        }
      />
      <Route path="/logIn" element={<UserForm />} />
    </Routes>
    /* </AuthProvide> */
  );
};
