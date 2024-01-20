import '../App.css';
import '../App.css';
import Home from './Home';
import Auth from './Auth';
import Login from './Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
              <Route path='/' element={<Login/>}></Route>
              <Route path='/auth' element={<Auth/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
