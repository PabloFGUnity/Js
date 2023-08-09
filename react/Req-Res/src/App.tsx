import Landing from "./components/Landing"
import Users from "../Views/Users/Users"
import UserDetails from "../Views/UserDetails/UserDetails"
import PostUser from "../Views/PostUser/PostUser"
import { Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

function App() {

  const queryClient = new QueryClient()


  return (
    <>
    <QueryClientProvider client={queryClient}>
      
      <Routes>
        <Route path='/' index element={<Landing/>}/>
        <Route path='/users' >
          <Route index element={<Users/>}/>
          <Route path=":id" element={<UserDetails/>}/>
        </Route>
        <Route path="/post" element={<PostUser/>}/>
      </Routes>
    </QueryClientProvider>
    </>
  )
}

export default App
