import Homeview from './Homeview'
import {useState,useEffect} from "react";



function Home() {

  const [characters, setCharacters] = useState(null);

  const [page, setPage] =useState(1);
  const handleChange = (value) => {
    setPage(value);
  };

  useEffect(function () {
    async function api() {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
      const characters= await response.json();
      setCharacters(characters)
      console.log(characters.info);
      
    }
    console.log("render");

    api();
  }, [page]);

  return (

    <>
      <Homeview characters={characters} pages={page} total={characters?.info.count} onChange={handleChange}/>
      
    </>
  )
}

export default Home
