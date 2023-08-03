// import Loginview from './Loginview'
import { useState } from "react";
import {useLogearseContext} from "../../Contexts/UiLogearse";
import BasicForm from '../../components/BasicForm/BasicForm';
import AdvancedForm from '../../../../../form_Nacho/src/components/AdvancedForm/AdvancedForm';

export default function Login() {

  const [view, setView] = useState("basic");

  const {loginBasic} = useLogearseContext();
  
  const {loginAdvanced} = useLogearseContext();
  
  function onSubmitBasic(values, actions) {
   console.log(values);
   console.log(actions);
   loginBasic(values);
   
  }

    function onSubmitAdvanced(values, actions) {
      console.log(values);
      console.log(actions);
      loginAdvanced(values);

    }
  
  return (
    <div className="App">
      <nav>
        <h3
          onClick={() => setView("basic")}
          style={{ color: view === "basic" ? "#fff" : "" }}
        >
          Basic
        </h3>
        <h3
          onClick={() => setView("advanced")}
          style={{ color: view === "advanced" ? "#fff" : "" }}
        >
          Advanced
        </h3>
      </nav>
      {view === "basic" ? <BasicForm onSubmit={onSubmitBasic}/> : <AdvancedForm onSubmit={onSubmitAdvanced}/>}
    </div>
    
  )
}

