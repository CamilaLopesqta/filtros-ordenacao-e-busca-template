import styled, { createGlobalStyle } from "styled-components";
import pokemons from "./pokemon/pokemon.json";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import { getColors } from "./utils/ReturnCardColor";
import Header from "./components/Header/Header.js";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
  justify-items: center;
`;

function App() {
  //estado para passar para o Header
  const [idFilter, setIdFilter] = useState("");
  const [nomePokemon, setNomePokemon] = useState("");
  const [ordenaPokemon, setOrdenaPokemon] = useState("")

  

  return (
    <>
      <GlobalStyle />
      <Header
        idFilter={idFilter}
        setIdFilter={setIdFilter}
        nomePokemon={nomePokemon}
        setNomePokemon={setNomePokemon}
      />
      <CardsContainer>
        {pokemons
          .filter((pokemon) => {
            return pokemon.id === idFilter || idFilter === "";
          })
          .filter((pokemon) => {
            return pokemon.name.english.toLowerCase().includes(nomePokemon)
          })
          .map((pokemon) => {
            return (
              <PokemonCard
                cardColor={getColors(pokemon.type[0])}
                key={pokemon.id}
                pokemon={pokemon}
              />
            );
          })}
      </CardsContainer>
    </>
  );
}

export default App;
