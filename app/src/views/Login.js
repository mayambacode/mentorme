const Login = () => {
    return (
        <div id="Login">

        <h1>Mentor Me</h1>

        <form>
            <h3>Email:</h3><br/><input id="user" type="email" name="username"></input> <br/>
            <h3>Password:</h3><br/> <input id="pass" type="password"></input><br/>
            <input id="submitBtn" type="submit"></input>
        </form>
        
        <div className="signup">
            <a href="app\src\views\Signup.js">
               Sign Up
            </a>
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