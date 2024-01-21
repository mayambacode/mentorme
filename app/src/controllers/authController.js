// import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from '../firebase.js';
// import { auth } from '../firebase.js';
// import { getAuth, signOut } from 'firebase/auth';

// const firebaseLogin = async (email, password) => {
//     try {
//         const userCredential = await signInWithEmailAndPassword(auth, email, password);
//         const user = userCredential.user;

//         if (!user) {
//             throw new Error('Login failed');
//         }

//         return user;
//     }
//     catch (err) {
//         throw new Error(err);
//     }
// }

// const firebaseSignup = async (email, password) => {
//     try {
//         const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//         const user = userCredential.user;

//         return user;
//     }
//     catch (err) {
//         throw new Error(err);
//     }
// }

// const firebaseLogout = async () => {
//     const auth = getAuth();
//     try{
//         await signOut(auth);
//         return;
//     }
//     catch (err) {
//         throw new Error(err)
//     }
// }

// const fb = { firebaseLogin, firebaseSignup, firebaseLogout }
// export default fb;