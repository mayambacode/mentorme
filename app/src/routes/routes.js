import express from 'express';
import chat from '../services/chatService.js';

const routes = express.Router();

// routes.post("/api/login", auth.login);
// routes.post("/api/signup", auth.signup);
// routes.post("/api/logout", auth.logout);

routes.post("/api/sendMessage", chat.sendMessage);

export default routes;