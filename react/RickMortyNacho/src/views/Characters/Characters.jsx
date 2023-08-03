import { useEffect, useState } from "react";
import CharactersView from "./CharactersView";

export default function Characters() {
  const [characters, setCharacters] = useState(null);
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  function handleChange(event, value) {
    setPage(value);
  }

  function onSearchCharacter(e) {
    setSearchValue(e.target.value);
  }

  useEffect(
    function () {
      async function fetchData() {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchValue}`
        );
        const data = await response.json();
        setCharacters(data);
      }

      fetchData();
    },
    [page, searchValue]
  ); // ---> characters

  return (
    <CharactersView
      characters={characters}
      page={page}
      totalPages={characters?.info.pages}
      onChange={handleChange}
      onSearch={onSearchCharacter}
      searchValue={searchValue}
    />
  );
}
