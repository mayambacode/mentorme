import User from '../models/User.js';

const login = async (req, res) => {
    const { email, password } = req.body;

    try{
        
        res.status(200).json();
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const signup = async (req, res) => {
    const { email, password } = req.body;

    try{
        

        res.status(200).json();
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const logout = async (req, res) => {
    
}

const auth = { login, signup, logout };
export default auth;