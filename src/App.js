import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from './components/LandingPage.jsx';
import Home from './components/Home.jsx';
import Pokemon from './components/Pokemon.jsx';
import NotFound from './components/NotFound.jsx';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route path='/pokemons' element={<Home/>}/>
        <Route path={`/pokemons/:pokemonId`} element={<Pokemon/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
