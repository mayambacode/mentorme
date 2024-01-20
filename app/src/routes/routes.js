const express = require('express');

const routes = express.Router();

routes.post("/api/sendMessage", () => {});
routes.post("/api/login", () => {});
routes.post("/api/signup", () => {});
routes.post("/api/logout", () => {});

module.exports = routes;