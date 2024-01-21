import User from '../models/User.js';
import authHelper from '../helpers/authentication.js';

const signup = async (req, res) => {
    const { email, password } = req.body;

    try{
        const hashedpwd = await authHelper.hashpwd(password);
        const user = await User.create({email: email, password: hashedpwd});
        res.status(200).json(user);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;

    try{
        const user = await User.login(email, password);
        res.status(200).json(user);
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ message: err.message });
    }
}

const logout = async (req, res) => {
    
}

const auth = { login, signup, logout };
export default auth;