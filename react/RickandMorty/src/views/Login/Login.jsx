import Loginview from './Loginview'
import {useState} from 'react';
import {useLogearseContext} from "../../Contexts/UiLogearse";


function Login() {
  const [auth, setAuth]= useState({
    email: "",
    password: ""
  });

  const {login} = useLogearseContext();

  function handleAuth(e){
    setAuth({
      ...auth,
      [e.target.name]: e.target.value
    })
  }

  function onSubmit(e){
    e.preventDefault();
    login(auth);
  }

  return (
    <Loginview auth={auth} onChange={handleAuth} onSubmit={onSubmit}/>
  )
}

export default Login