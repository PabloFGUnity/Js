// import Detalleview from './Detalleview'
import CardsDetalle from '../../components/Cards/CardsDetalle'
import {useState,useEffect} from "react";
import { useParams } from 'react-router-dom';


function Detalle() {

  const [character, setCharacter] = useState(null);

  const {id}=useParams();
  console.log(id);

  useEffect(function () {
    async function api() {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const character= await response.json();
      setCharacter(character);
      console.log(character);
      console.log(response);


    }
    console.log("render");

    api();
  }, [id]);

  return (
      <>
      {character ? (
        <CardsDetalle item={character}/>
      ): <p>Cargando...</p> }
      
      </>

  )
}

export default Detalle
