import './App.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Testimonials from './Components/Testimonials';
function App() {
  return (
    <div id="app">
      <NavBar />
      <div id="bg">

      </div>
      <Parallax pages={3}>
        <Home />
        <Testimonials />
      </Parallax>
    </div>
  );
}

export default App;
