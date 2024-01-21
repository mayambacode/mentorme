import fb from '../controllers/authController.js';
import User from '../models/User.js';

const login = async (req, res) => {
    const { email, password } = req.body;

    try{
        const result = fb.firebaseLogin(email, password);
        const user = result.uid;
        res.status(200).json(user);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const signup = async (req, res) => {
    const { email, password } = req.body;

    try{
        const result = fb.firebaseSignup(email, password);
        const user = await User.create({
            userID: result.uid,
            email: email
        });

        res.status(200).json(user);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const logout = async (req, res) => {
    
}

const auth = { login, signup, logout };
export default auth;