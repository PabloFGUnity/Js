import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { red, blue } from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline";
import AuthContextProvider from "./contexts/AuthContext";
import Characters from "./views/Characters";
import CharacterDetail from "./views/CharacterDetail/CharacterDetail";
import Landing from "./views/Landing/Landing";
import Admin from "./views/Admin/Admin";
import About from "./views/About/About";
import LoginFormik from "./views/LoginFormik/LoginFormik";
import Layout from "./components/Layout/Layout";
import PublicRoute from "./components/router/PublicRoute";
import PrivateRoute from "./components/router/PrivateRoute";
import "./App.css";
import { roles } from "./const/roles";
import Unauthorized from "./views/Unauthorized/Unauthorized";
/* import Login from "./views/Login/Login";
 */

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
              <Route path="/login" element={<LoginFormik />} />
            </Route>
            <Route path="unauthorized" element={<Unauthorized />} />

            {/* Rutas privadas */}
            <Route
              path="/characters"
              element={<PrivateRoute allowedRoles={roles.ALL_USERS} />}
            >
              <Route element={<Layout />}>
                <Route index element={<Characters />} />
                <Route path=":id" element={<CharacterDetail />} />
              </Route>
            </Route>
            <Route
              path="admin"
              element={<PrivateRoute allowedRoles={[roles.ADMIN]} />}
            >
              <Route index element={<Admin />} />
            </Route>
            <Route
              path="about"
              element={<PrivateRoute allowedRoles={[roles.SUPER_ADMIN]} />}
            >
              <Route index element={<About />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
