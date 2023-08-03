import { Navigate, Outlet } from "react-router-dom"
// import { useUiModeContext } from "../Contexts/UiModeContext";
import {useLogearseContext} from "../Contexts/UiLogearse";


function Private() {
  const {user}= useLogearseContext();

  // const { uiMode } = useUiModeContext();
  // console.log(uiMode);


  // if(!uiMode )
  // {
  //   return <Navigate to="/Login"/>
  // }

  if(!user )
  {
    return <Navigate to="/Login"/>
  }

  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default Private