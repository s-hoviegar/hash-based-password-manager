import { useContext, useState } from "react";

import AuthContext from "../../store/auth-context";
import AuthForm from "../AuthForm/AuthForm";
import PasswordManager from "../PasswordManager/PasswordManager";

const Home = () => {
  const authCtx = useContext(AuthContext);
  const [masterPassword, setMasterPassword] = useState("");

  const masterPasswordHandler = (pass) => {
    setMasterPassword(pass);
  };

  return (
    <>
      {!authCtx.isLoggedIn && (
        <AuthForm masterPasswordSaver={masterPasswordHandler} />
      )}
      {authCtx.isLoggedIn && (
        <PasswordManager
          masterPassword={masterPassword}
          handleSetMasterPassword={masterPasswordHandler}
        />
      )}
    </>
  );
};

export default Home;
