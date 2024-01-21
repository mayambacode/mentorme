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

userSchema.statics.createNewRoom = async function(users) {
    try {
        // Finds User objects with the IDs
        const firstUser = await this.findById(users[0]);
        const secondUser = await this.findById(users[1]);
        const participants = [
            firstUser,
            secondUser
        ];

        const chat = await Chat.create(participants, []);
        return { chatID: chat.chatID, message: "Chat created" };
    }
    catch (err) {
        throw new Error(err);
    }
}

userSchema.statics.sendMessage = async function(userID, chatID, messageContent) {
    try{
        //Find or create the user
        let user = await this.findById(userID);

        if (!user) {
            throw new Error('User not found');
        }

        //Find or create the chat
        let chat = await this.findById(chatID);

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

        let result = await Chat.addNewMessage(message);

        await user.save();

        return { chatID: chat.chatID, message: result };
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