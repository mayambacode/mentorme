import './App.css';
import Home from './Home';
import Auth from './Auth';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='content'>
          <Switch>
            <Route exact path='/'></Route>
              <Home />
              <Route exact path='/auth'></Route>
              <Auth />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
