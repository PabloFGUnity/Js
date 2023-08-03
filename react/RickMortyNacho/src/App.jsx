import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { red, blue } from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline";
import Characters from "./views/Characters";
import CharacterDetail from "./views/CharacterDetail/CharacterDetail";
import Landing from "./views/Landing/Landing";
import Layout from "./components/Layout/Layout";

import "./App.css";
import PublicRoute from "./components/router/PublicRoute";
import PrivateRoute from "./components/router/PrivateRoute";
import AuthContextProvider from "./contexts/AuthContext";
import Login from "./views/Login/Login";

const darkTheme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: red[500],
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: blue[600],
      dark: "#ba000d",
      contrastText: "#000",
    },
    mode: "dark",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        a: {
          color: "#fff",
          textDecoration: "none",
        },
      },
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Landing />} />

            {/* Rutas publicas */}
            <Route element={<PublicRoute />}>
              <Route path="/login" element={<Login />} />
            </Route>
            {/* Rutas privadas */}
            <Route path="/characters" element={<PrivateRoute />}>
              <Route element={<Layout />}>
                <Route index element={<Characters />} />
                <Route path=":id" element={<CharacterDetail />} />
              </Route>
            </Route>
          </Routes>
        </ThemeProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
