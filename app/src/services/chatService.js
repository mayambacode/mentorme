import User from '../models/User.js';

const startChat = async (req, res) => {
    const { firstUserID, secondUserID } = req.body;
    
    try{
        const participants = [firstUserID, secondUserID];
        const result = await User.createRoom(participants);
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

const chat = { sendMessage, startChat };
export default chat;