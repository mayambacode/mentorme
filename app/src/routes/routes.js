const express = require('express');
const auth = require('../services/authService');

const routes = express.Router();

routes.post("/api/sendMessage", () => {});
routes.post("/api/login", auth.login);
routes.post("/api/signup", auth.signup);
routes.post("/api/logout", () => {});

module.exports = routes;