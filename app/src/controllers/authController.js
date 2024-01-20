import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "../firebase";
import { auth } from '../firebase';

const authController = {
    login(email, password) {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
        }).catch((err) => {
            console.log(err);
        })
    },
    signup(email, password) {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
        })
        .catch((err) => {
            console.log(err);
        })
    }
}

export default authController;