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

        <form>
            <h3>Email:</h3><br/><input id="user" type="email" name="username"></input> <br/>
            <h3>Password:</h3><br/> <input id="pass" type="password"></input><br/>
            <input id="submitBtn" type="submit"></input>
        </form>
        
        <div className="signup">
            <Link href="app\src\views\Signup.js">
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