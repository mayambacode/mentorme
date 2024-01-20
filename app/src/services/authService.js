const fb = require('../controllers/authController');


const login = async (req, res) => {
    const { email, password } = req.body;

    try{
        const result = fb.firebaseLogin(email, password);
        res.status(200).json(result);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const signup = async (req, res) => {
    const { email, password } = req.body;

    try{
        const result = fb.firebaseSignup(email, password);
        res.status(200).json(result);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const logout = async (req, res) => {

}

module.exports = { login, signup, logout };