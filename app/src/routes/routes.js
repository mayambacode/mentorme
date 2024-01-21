import express from 'express';
import chat from '../services/chatService.js';
import auth from '../services/authService.js';

const routes = express.Router();

routes.post("/api/login", auth.login);
routes.post("/api/signup", auth.signup);
routes.post("/api/logout", auth.logout);

routes.post("/api/sendMessage", chat.sendMessage);
routes.post("/api/startChat", chat.startChat);
routes.post("/api/test", chat.test);

export default routes;