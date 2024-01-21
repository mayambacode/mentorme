import User from '../models/User.js';
import authHelper from '../helpers/authentication.js';

const signup = async (req, res) => {
    const { email, password } = req.body;

    try{
        const hashedpwd = await authHelper.hashpwd(password);
        const user = await User.create({email: email, password: hashedpwd, isLoggedIn: 1});
        res.status(200).json({ message: "Account registered", user});
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ message: err.message });
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;

    try{
        const user = await User.login(email, password);
        res.status(200).json({ message: "Successfully logged in", user});
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ message: err.message });
    }
}

const logout = async (req, res) => {
    const { userID } = req.body;
    try {
        const result = await User.logout(userID);
        res.status(200).json({ message: "Successfully logged out", result});
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ message: err.message });
    }
}

const auth = { login, signup, logout };
export default auth;