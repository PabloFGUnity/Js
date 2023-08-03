import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "../Header/Header";
import background from "../../assets/rickBg.png";

export default function Layout() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Header />
      <Box p={2}>
        <Outlet />
      </Box>
    </Box>
  );
}
