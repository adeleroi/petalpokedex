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
          <Route path="/" exact component={Home}/>
          <Route path="/pokemonlist" component={PokemonList}/>
          <Route path="/pokemon/:id" component={Pokemon}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
