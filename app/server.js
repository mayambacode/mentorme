import dotenv from 'dotenv';
import express from 'express';
import routes from './src/routes/routes.js';
import mongoose from 'mongoose';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

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