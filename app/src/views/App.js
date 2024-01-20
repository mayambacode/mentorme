import '../App.css';
import Home from './Home';
import Signup from './Signup';
import Profile from './Profile';
import Message from './Message';
import Login from './Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/profile' element={<Profile/>}></Route>
            <Route path='/message' element={<Message/>}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
