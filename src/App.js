import logo from './logo.svg';
import './App.css';
import Inicio from './components/Home'
import styles from './components/Home.module.css'
import Sobre from './components/Sobre'
import Typewriter from './components/Typewriter';
import Typewritersecond from './components/Typewritersecond';
import Nome from './components/Nome'
import Minhasskills from './components/Minhasskills'
import Carousel from './components/Carousel';

function App() {
  const texto = [ 'Bernardo Castellani']
  const textob = ['Estudante de Engenharia de Software']
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-floatin">
      <div class='container3' id='container3'>
      <Typewriter texts={texto} pause={1500} className="texto-grande" />
      <Typewritersecond texts={textob} pause={1000} className="texto-grande"/>
      </div>
      <Inicio />
      <Sobre />
      <Carousel />
      </nav>
    </div>
  );
}

export default App;
