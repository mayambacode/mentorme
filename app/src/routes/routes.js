const express = require('express');
const auth = require('../services/authService');
const chat = require('../services/chatService');

const routes = express.Router();

routes.post("/api/login", auth.login);
routes.post("/api/signup", auth.signup);
routes.post("/api/logout", auth.logout);

routes.post("/api/sendMessage", chat.sendMessage);

module.exports = routes;