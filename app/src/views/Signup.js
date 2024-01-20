import { Link } from 'react-router-dom';
import '../css/Signup.css';
const Signup = () => {
    return (
        <div className="left">
            
                <div className="title">
                    <h1>Welcome to Mentor Me</h1>
                    <h2>Find Your Mentor, Find Your Way</h2>
                </div>
               
               <div className="right">
                    <div className='signupform'>
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
               

               
            </div>
    )
}

export default Signup;