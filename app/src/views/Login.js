import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from '../firebase.js';
import { auth } from '../firebase.js';

const Login = () => {
    const firebaseLogin = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
    
            if (!user) {
                throw new Error('Login failed');
            }
    
            return user;
        }
        catch (err) {
            throw new Error(err);
        }
    }

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