import { Link } from 'react-router-dom';
import '../css/Signup.css';
import { createUserWithEmailAndPassword } from '../firebase.js';
import { auth } from '../firebase.js';

const Signup = () => {
    const firebaseSignup = async (email, password) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
    
            return user;
        }
        catch (err) {
            throw new Error(err);
        }
    }

    return (
        <div className="SignupLeft">
            
                <div className="mentorgraphics" id="left">
                    <h1>Welcome to Mentor Me</h1>
                    <h2>Find Your Mentor, Find Your Way</h2>
                </div>
               
               <div className="signupform" id="right">

               <h1>Sign Up</h1>

                 <form>
                    <input type="text" className="fullname" value="Full Name"></input> <br/>
                   
                    <input type="email" className="email" value="Email"></input> <br/>
                    <input type="password" className="password" value="Password"></input><br/> 
                    <input type="password" className="confirmpassword" value="Confirm Password"></input><br/> 
                    <inpu type="submit" value="Sign Up"></inpu>
                 </form>

                    <div>
                        <Link href="app\src\views\Login.js">Login</Link>
                    </div>

                </div>
               

               
            </div>
    )
}

export default Signup;