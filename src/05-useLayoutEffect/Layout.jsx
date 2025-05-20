import { useCounter, useFetch } from "../Hooks";
import { LoadingMessage, PokemonCard } from "../imports/index";

export const Layout = () => {
  const { counter, increment, decrement } = useCounter(1);
  
  const { data, isLoading } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );

  return (
    <>
      <h1>Información de Pokemon</h1>
      <hr />
      {isLoading ? (
        <LoadingMessage />
      ) : (
        <PokemonCard 
          name={data?.name} 
          id={data?.id} 
          sprites={data?.sprites.front_default}
        />
      )}

      <button
        className="btn btn-primary"
        onClick={() => (counter > 1 ? decrement() : null)}
      >
        Anterior
      </button>
      <button className="btn btn-primary" onClick={() => increment()}>
        Siguiente
      </button>
    </>
  );
};
