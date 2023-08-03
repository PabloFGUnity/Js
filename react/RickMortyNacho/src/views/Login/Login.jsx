import { useState } from "react";
import LoginView from "./LoginView";
import { useAuthContext } from "../../contexts/AuthContext";

export default function Login() {
  const [auth, setAuth] = useState({
    email: "",
    password: "",
  });
  
  const { login } = useAuthContext();
  function handleAuth(e) {
    setAuth({
      ...auth,
      [e.target.name]: e.target.value,
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    login(auth);
  }

  return <LoginView auth={auth} onChange={handleAuth} onSubmit={onSubmit} />;
}
