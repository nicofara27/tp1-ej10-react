import { useEffect, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import ListaPeliculas from "./ListaPeliculas";

const Formulario = () => {
    const peliculasLocalStorage =
    JSON.parse(localStorage.getItem("listaPeliculas")) || [];
  const [pelicula, setPelicula] = useState({});
  const [arregloPeliculas, setArregloPeliculas] = useState(peliculasLocalStorage);

  //Ciclo de vida del componente
  useEffect(() => {
    localStorage.setItem("listaPeliculas", JSON.stringify(arregloPeliculas));
  });

  const handleSubmit = (e) => {
    let form = document.getElementById("form");
    e.preventDefault();
    setArregloPeliculas([...arregloPeliculas, pelicula]);
    setPelicula({});
    form.reset();
  };

  return (
    <Container className="my-4 mx-auto">
      <section>
        <h3 className="px-4 py-2 m-0 fw-semibold borde rounded-3 shadow">
          Completa los datos de la pelicula
        </h3>
        <Form
          className="bg-celeste p-4 fs-4 fw-semibold rounded-3 my-1 shadow"
          id="form"
          onSubmit={handleSubmit}
        >
          <Form.Group className="mb-3" controlId="formBasicTitulo">
            <Form.Label>Titulo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa el nombre de la pelicula"
              required
              minLength={2}
              maxLength={25}
              onChange={(e) => {
                pelicula.titulo = e.target.value;
                setPelicula(pelicula);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDescripcion">
            <Form.Label>Descripcion</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Ingresa la descripcion de la pelicula"
              required
              minLength={70}
              maxLength={170}
              onChange={(e) => {
                pelicula.descripcion = e.target.value;
                setPelicula(pelicula);
              }}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Género</Form.Label>
            <Form.Select
              className="mb-3"
              required
              onChange={(e) => {
                pelicula.genero = e.target.value;
                setPelicula(pelicula);
              }}
            >
              <option>Seleccione uno</option>
              <option value="Acción">Acción</option>
              <option value="Drama">Drama</option>
              <option value="Comedia">Comedia</option>
              <option value="Terror">Terror</option>
            </Form.Select>
          </Form.Group>
          <div className="text-center ">
            <Button className="w-50 btn-morado" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </section>
      <h2 className="text-center display-4 text-decoration-underline mt-4">
        Lista peliculas
      </h2>
      <ListaPeliculas arregloPeliculas={arregloPeliculas}></ListaPeliculas>
    </Container>
  );
};

export default Formulario;
