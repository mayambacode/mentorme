import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const messageSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    content: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now }
});

const chatSchema = new mongoose.Schema({
    chatId: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' }],
    messages: [messageSchema]
});

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
    chats: [chatSchema],
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

userSchema.statics.sendMessage = async (userID, chatID, messageContent) => {
    try{
        //Find or create the user
        let user = await this.findById(userID);

        if (!user) {
            throw new Error('User not found');
        }

        //Find or create the chat
        let chat = user.chats.find(chat => chat.chatID === chatID);

        if (!chat) {
            chat = {
                chatID,
                participants: [],
                message: []
            };
            user.chats.push(chat);
        };

        // Add the message to the chat
        const message = {
            sender: userID,
            content: messageContent,
            timestamp: new Date()
        };

        chat.messages.push(message);

        await user.save();

        return user;
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