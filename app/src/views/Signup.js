import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className="Signup">
            
                <div className="mentorgraphics">
                    <h1>Welcome to Mentor Me</h1>
                    <h2>Find Your Mentor, Find Your Way</h2>
                </div>
               
               <div className="signupform">

               <h1>Sign Up</h1>

                 <form>
                    <input type="text" className="fullname" value="Full Name"></input>
                   
                    <input type="email" className="email" value="Email"></input>
                    <input type="password" className="password" value="Password"></input>
                    <input type="password" className="confirmpassword" value="Confirm Password"></input>
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