import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './App.css';
import Formulario from './components/Formulario';

function App() {
  return (
    <Container className='my-3'>
      <h1 className='text-center display-3 text-decoration-underline'>Alta de peliculas</h1>
      <Formulario></Formulario>
    </Container>
  );
}

export default App;
