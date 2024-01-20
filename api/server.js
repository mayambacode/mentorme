const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

mongoose.connect(process.env.MDB_URL)
.then((result => {
    console.log(`API listening on port ${PORT}`);
    app.listen(PORT);
}))
.catch((err) => console.log(err));

app.use(routes);