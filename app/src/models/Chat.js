import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema({
    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' }],
    messages: []
});

chatSchema.statics.addNewMessage = async function(message) {
    try{
        const chatID = message.chatID;
        await this.findByIdAndUpdate(
            chatID,
            {
                $push: {
                    messages: message
                }
            },
            {
                new: true
            }
        );
       
        return "Message sent";
    }
    catch (err) {
        throw new Error(err);
    }
}

const Chat = mongoose.model('Chat', chatSchema);
export default Chat;