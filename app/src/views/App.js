import '../App.css';
import Home from './Home';
import Auth from './Auth';
import Profile from './Profile';
import Message from './Message';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='content'>
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/auth' element={<Auth />}></Route>
            {/* <Route exact path='/profile'></Route>
            <Profile /> */}
            <Route exact path='/message' element={<Message />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
