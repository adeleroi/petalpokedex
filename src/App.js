import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchBdData } from './store/actionTypes'
import Home from './views/home'
import Pokemon from './views/pokemon'
import PokemonList from './views/pokemonlist'


function App({dispatch}) {
  // le but ici est de recuperer les donnees et les utilisees
  // pour des suggestions dans le composant SearchMenu
  React.useEffect(() => {
    dispatch(fetchBdData())
  },[dispatch])
  
  return (
    <div className="App">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/pokemonlist" component={PokemonList}/>
          <Route path="/pokemon/:id" component={Pokemon}/>
          <Redirect to="/"/>
        </Switch>
    </div>
  );
}


const mapStateToProps = state => ({
  pokemonName: state.bdReducer.pokemonName,
})

export default connect(mapStateToProps)(App)
// export default AppProvider;
