const User = require('../models/User');

const sendMessage = async (req, res) => {
    const { userID, content } = req.body;

    User.create({ userID, content });
}

module.exports = { sendMessage };