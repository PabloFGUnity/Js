import { createContext, useState, useContext } from "react";

const AuthContext = createContext({
  user: null,
  errorMessage: null,
  login: () => {},
  logout: () => {},
});

const RICK_MORTY_KEY = "RICK_MORTY_KEY";

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(
    localStorage.getItem(RICK_MORTY_KEY) ?? null
  );
  const [errorMessage, setErrorMessage] = useState(null);

  function login({ email, password }) {
    if (email === "nacho@mail.com" && password === "1234") {
      setUser({ email });
      localStorage.setItem(RICK_MORTY_KEY, email);
      setErrorMessage(null);
    }
    setErrorMessage("Email o contraseña incorrectos");
  }

  function logout() {
    localStorage.removeItem(RICK_MORTY_KEY);
    setUser(null);
  }

  const value = {
    user,
    errorMessage,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
