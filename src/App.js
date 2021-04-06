import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Foot from './components/footer'
import Home from './views/home'
import Pokemon from './views/pokemon'
import PokemonList from './views/pokemonlist'
import configureStore from './store/store'

const store= configureStore()

function App() {
  return (
    <div className="App">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/pokemonlist" component={PokemonList}/>
          <Route path="/pokemon/:id" component={Pokemon}/>
        </Switch>
    </div>
  );
}


const AppProvider = () => {
  return (
    <Router>
      <Provider store={store}>
        <App/>
      </Provider>
    </Router>
  )
}

export default AppProvider;
