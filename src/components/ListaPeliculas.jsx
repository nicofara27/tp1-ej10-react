import CardPelicula from "./CardPelicula";

const ListaPeliculas = ({ arregloPeliculas }) => {
  return (
    <section className="d-flex flex-wrap justify-content-center">
      {arregloPeliculas.map((pelicula, posicion) => (
        <CardPelicula key={posicion} pelicula={pelicula}></CardPelicula>
      ))}
    </section>
  );
};

export default ListaPeliculas;
