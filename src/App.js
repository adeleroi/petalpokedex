import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Foot from './components/footer'
import Home from './views/home'
import Pokemon from './views/pokemon'
import PokemonList from './views/pokemonlist'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact>
            <Home/>
          </Route>
          <Route path="/pokemonlist">
            <PokemonList/>
          </Route>
          <Route path="/pokemon/:id">
            <Pokemon />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
