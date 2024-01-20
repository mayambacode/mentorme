const express = require('express');
const routes = require('./src/routes/routes');
const mongoose = require('mongoose');
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