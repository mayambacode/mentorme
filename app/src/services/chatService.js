import Chat from '../models/Chat.js';
import User from '../models/User.js';

const startChat = async (req, res) => {
    const { firstUserID, secondUserID } = req.body;
    
    try{
        const firstUser = await User.findById(firstUserID);
        const secondUser = await User.findById(secondUserID);
        const result = await User.createNewRoom(firstUser, secondUser);
        res.status(201).json(result);
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ message: err.message });
    }
}

const sendMessage = async (req, res) => {
    const { userID, chatID, content } = req.body;

    try{
        const result = await User.sendMessage(userID, chatID, content);
        res.status(201).json(result);
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ message: err.message });
    }
}

const getChat = async (req, res) => {
    const { chatID } = req.body;
    try {
        const messages = await Chat.getMessages(chatID);
        res.status(400).json({ Chat: messages });
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ message: err.message });
    }
}

const chat = { sendMessage, startChat, getChat };
export default chat;