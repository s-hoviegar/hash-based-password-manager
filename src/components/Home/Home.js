import { useContext } from "react";

import AuthContext from "../../store/auth-context";
import AuthForm from "../AuthForm/AuthForm";
import PasswordManager from "../PasswordManager/PasswordManager";

const Home = () => {
  const authCtx = useContext(AuthContext);

  return (
    <>
      {!authCtx.isLoggedIn && <AuthForm />}
      {authCtx.isLoggedIn && <PasswordManager />}
    </>
  );
};

export default Home;
