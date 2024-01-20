const createMessage = (event, userID) => {
    event.preventDefault();

    const messageInfo = {
        userID: userID,
        content: event.target.parentElement.firstChild.valuem
    };

    event.target.parentElement.firstChild.value = '';

    return messageInfo;
}

module.exports = { createMessage };