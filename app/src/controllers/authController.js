import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "../firebase";
import { auth } from '../firebase';

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