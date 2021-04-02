import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './views/home'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact>
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
