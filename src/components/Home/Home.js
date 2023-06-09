import { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import AuthContext from "../../store/auth-context";
import AuthForm from "../AuthForm/AuthForm";

const Home = () => {
  const authCtx = useContext(AuthContext);

  return (
    <>
      {!authCtx.isLoggedIn && <AuthForm />}
      {authCtx.isLoggedIn && <h1>logged in (home)</h1>}
    </>
  );
};

export default Home;
