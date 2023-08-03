import { Navigate, Outlet } from "react-router-dom"
// import { useUiModeContext } from "../Contexts/UiModeContext";
import {useLogearseContext} from "../Contexts/UiLogearse";

function Public() {

  const {user} = useLogearseContext();

  // const {uiMode} = useUiModeContext();
  // console.log(uiMode);

  // if(uiMode )
  // {
  //   return <Navigate to="/Home"/>
  // }

    if(user )
    {
      return <Navigate to="/Home"/>
    }

  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default Public