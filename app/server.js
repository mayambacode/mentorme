import dotenv from 'dotenv';
import express from 'express';
import admin from 'firebase-admin';
import serviceAccount from 'mentormeauth-firebase-adminsdk-fqxfa-fb2bf75c8f.json';
import routes from './src/routes/routes.js';
import mongoose from 'mongoose';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const auth = admin.auth();
const firestore = admin.firestore();

mongoose.connect(process.env.MDB_URL)
.then((result) => {
    console.log(`API listening on port ${PORT}`);
    app.use(express.json());
})
.catch((err) => {
    console.log(err);
});

app.listen(PORT);
app.use(routes);