import User from '../models/User.js';

const sendMessage = async (req, res) => {
    const { userID, content } = req.body;

    User.create({ userID, content });
}

const chat = { sendMessage };
export default chat;