const { signInWithEmailAndPassword, createUserWithEmailAndPassword } = require('../firebase');
const { auth } = require('../');

const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log(userCredential);
    }).catch((err) => {
        console.log(err);
    })
}

const signup = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log(userCredential);
    })
    .catch((err) => {
        console.log(err);
    })
}

module.exports = { login, signup };