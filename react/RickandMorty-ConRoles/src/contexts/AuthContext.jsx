import { createContext, useState, useContext } from "react";
import jwt_decode from "jwt-decode";

const AuthContext = createContext({
  user: null,
  errorMessage: null,
  login: () => {},
  logout: () => {},
});

const RICK_MORTY_KEY = "RICK_MORTY_KEY";

const jwt0 =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTYsImVtYWlsIjoibHVjQG1haWwuY29tIiwidXNlclJvbGUiOjAsImlhdCI6MTY5MDgxNDI3NywiZXhwIjoxNjkwODE3ODc3fQ.8l4XQn7hKw0v9qietCGF16dWrGwsUrQp7q7EJQXErKo";

const jwt1 =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTYsImVtYWlsIjoibHVjQG1haWwuY29tIiwidXNlclJvbGUiOjEsImlhdCI6MTY5MDgxNDI3NywiZXhwIjoxNjkwODE3ODc3fQ.2yjz3mkROt7e_rSZTqRuCzHmLLXYDhD2jgJSIcBZl0A";
const jwt2 =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTYsImVtYWlsIjoibHVjQG1haWwuY29tIiwidXNlclJvbGUiOjIsImlhdCI6MTY5MDgxNDI3NywiZXhwIjoxNjkwODE3ODc3fQ.zDFvFuQxg5u9thnuvPt_2Ks7WbFQvUpvBbz7HH_xsN8";
export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem(RICK_MORTY_KEY)) ?? null
  );
  const [errorMessage, setErrorMessage] = useState(null);

  function login({ email, password }) {
    if (email === "nacho@mail.com" && password === "Nacho12") {
      const user = jwt_decode(jwt2); // Esto seria lo que nos devuelve la API

      setUser(user);
      localStorage.setItem(RICK_MORTY_KEY, JSON.stringify(user));
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
