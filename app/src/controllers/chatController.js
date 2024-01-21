const createMessage = (event, userID) => {
    event.preventDefault();

    const messageInfo = {
        userID: userID,
        content: event.target.parentElement.firstChild.valuem
    };

    event.target.parentElement.firstChild.value = '';

    return messageInfo;
}

const createConversation = (event) => {
    // add to 
}

const newConversation = (event) => {
    // const connections = () => {} // query for connections to DM
    // 
}

module.exports = { createMessage };