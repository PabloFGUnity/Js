import Detalles from './views/Detalles';
import Home from './views/Home';
import Login from './views/Login';
import Public from './router/Public'
import Private from './router/Private'
import Landing from './components/Landing'
import { Routes, Route } from "react-router-dom";
// import { UiModeContextProvider } from "./Contexts/UiModeContext";
import LogContextProvider from "./Contexts/UiLogearse";
import "./App.css";

function App() {
  
  return (
    <>
    <LogContextProvider>
      <Routes>
        <Route path='/' element={<Landing/>}/>

        {/* Publico */}
          <Route path="/Login" element={<Public />}>
            <Route index element={<Login/>}/>
          </Route>

        {/* Privado*/}
        <Route path='/Home' element={<Private />}>
          <Route index element={<Home/>}/> 
          <Route path=":id" element={<Detalles/>}/> 
        </Route>
            
      </Routes>
      </LogContextProvider>
      
    </>
  )
}

export default App
