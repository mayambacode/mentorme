import mongoose from 'mongoose';
import Chat from './Chat.js';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    email: {
        type: String, 
        required: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        minLength: [6, 'Minimum password length is 6']
    },
    chats: [Number],
    year: {
        type: Number
    },
    program: {
        type: String
    },
    bio: {
        type: String
    }
});

userSchema.statics.createNewRoom = async function(firstUser, secondUser) {
    try {
        const participants = [
            firstUser,
            secondUser
        ];

        const chat = await Chat.create({ participants: participants, messages: [] });
        const chatID = chat._id.toString();
        return { chatID: chatID, message: "Chat created" };
    }
    catch (err) {
        throw new Error(err);
    }
}

userSchema.statics.sendMessage = async function(userID, chatID, messageContent) {
    try{
        //Find or create the user
        const user = await this.findById(userID);

        if (!user) {
            throw new Error('User not found');
        }

        //Find or create the chat
        const chat = await Chat.findById(chatID);

        if (!chat) {
            throw new Error('Chat not found');
        }

        // Add the message to the chat
        const message = {
            chatID: chatID,
            sender: userID,
            content: messageContent,
            timestamp: new Date()
        };

        const result = await Chat.addNewMessage(message);

        return { chatID: chatID, message: result };
    }
    catch (err) {
        console.error(err);
        throw new Error(err);
    }
}

userSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email });
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return user;
        }
    }

    throw Error('Incorrect credentials');
}

const User = mongoose.model('User', userSchema);

export default User;