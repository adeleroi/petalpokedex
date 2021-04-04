import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Foot from './components/footer'
import Home from './views/home'
import Pokemon from './views/pokemon'
import PokemonList from './views/pokemonlist'

import {
  Menu,
  MenuContent,
  MenuOpen,
  useContextMenu
} from './components/searchcontext'

function App() {
  return (
    <div className="App">
      <Router>
      <Menu>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/pokemonlist" component={PokemonList}/>
          <Route path="/pokemon/:id" component={Pokemon}/>
        </Switch>
        </Menu>
      </Router>
    </div>
  );
}

export default App;
