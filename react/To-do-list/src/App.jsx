import './App.css'
import { todolist } from '../api/todolist'
import { useState } from 'react'

function App() {
  const [isDeleted,setDeleted]=useState([...todolist]);
  console.log(isDeleted);
  function deleted(item) 
  {   
    console.log("le he dado al boton");
   
    let vacio=[];

      for (let i=0; i<=isDeleted.length -1 ; i++)
      {
        console.log(isDeleted[i]);
        if(isDeleted[i].id !== item)
        {
          vacio.push(isDeleted[i]);
      
        }
      }

      console.log(vacio,"Arrya");
      setDeleted(vacio);
      
  }



  return (
    
      <div>
      <h2>Cosas que hacer</h2>
      <input className="form" type="text" placeholder="Pon cosas que hacer" aria-label="default input example"/>
      <ul className="list-group " >

        {isDeleted.map((item)=>  
        //Para meter logica llaves si no metes lógica, directamente parentisis
        (
            <li className="list-group-item " key={item.id}>{item.title} <button className='btn btn-danger ' onClick={()=>deleted(item.id)}>X</button>
            </li>
        ))}

       </ul>

        
      </div>
  )
}

export default App
