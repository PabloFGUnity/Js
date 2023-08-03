import "./App.css";
import Home from "./views/Home";
import Products from "./views/Products";
import Layout from "./components/Layout";
import AboutUs from './views/AboutUs';

import { Routes, Route } from "react-router-dom";
import NotFound from "./views/NotFound/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="about" element={<AboutUs/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
