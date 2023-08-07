import Landing from "./components/Landing"
import Users from "../Views/Users/Users"
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/Users' element={<Users/>}/>

      </Routes>
    </>
  )
}

export default App
