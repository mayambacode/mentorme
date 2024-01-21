import mongoose from 'mongoose';

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
    userID: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String, 
        required: true,
        unique: true
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

const User = mongoose.model('User', userSchema);

export default User;