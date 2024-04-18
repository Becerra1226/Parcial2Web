import Navbar from "./Navbar";
import React, { useEffect, useState } from "react";
import Characters from "./Characters";
import Pagination from "./Pagination";
import Search from "./Search";
export function Home({ user, setUser }) {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});


  let initialUrl = `https://rickandmortyapi.com/api/character`;

  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  };

  const onPrevious = () => {
    fetchCharacters(info.prev);
  };

  const onNext = () => {
    fetchCharacters(info.next);
  };

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, [initialUrl]);

  return (
    <>
      <Navbar brand="Rick & Morty App" />
      <h1>Bienvenido {user}</h1>
      <div className="container mt-5 ">
        <Search/>
        <Characters characters={characters} />
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </div>
    </>
  );
}

export default Home;
