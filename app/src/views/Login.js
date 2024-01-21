import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div id="Login">

        <h1>Mentor Me</h1>

        <form className='d-flex justify-content-center align-items-center'>
            <h3 className='p-2'>Email:</h3>
            <input className='p-2' id="user" type="email" name="username"></input>
            <h3 className='p-2'>Password:</h3>
            <input className='p-2' id="pass" type="password"></input>
            <input className='p-2' id="submitBtn" type="submit"></input>
        </form>
        
        <div className="d-flex align-items-center">
            <Link className='btn button-primary' href="app\src\views\Signup.js">
        <div className="signup">
            <Link to="/Signup.js"/>
               Sign Up
            </Link>
        </div>

        {/* <div>
           <a href="">
                <button></button>
            </a>
        </div> */}

        </div>
    );
}

export default Login;