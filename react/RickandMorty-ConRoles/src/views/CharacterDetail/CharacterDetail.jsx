import { useParams } from "react-router-dom";
import CharacterDetailView from "./CharacterDetailView";
import { useEffect, useState } from "react";

export default function CharacterDetail() {
  const [character, setCharacter] = useState(null);
  const { id } = useParams();

  useEffect(
    function () {
      async function fetchData() {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        const data = await response.json();
        setCharacter(data);
      }

      fetchData();
    },
    [id]
  );

  return <CharacterDetailView character={character} />;
}
