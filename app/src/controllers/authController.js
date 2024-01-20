const { signInWithEmailAndPassword, createUserWithEmailAndPassword } = require('../firebase');
const { auth } = require('../firebase');

const firebaseLogin = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential;
    }
    catch (err) {
        throw new Error(err);
    }
}

const firebaseSignup = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential;
    }
    catch (err) {
        throw new Error(err);
    }
}

module.exports = { firebaseLogin, firebaseSignup };