const createMessage = (event, userID) => {
    event.preventDefault();

    const messageInfo = {
        userID: userID,
        content: event.target.parentElement.firstChild.valuem
    };

    event.target.parentElement.firstChild.value = '';

    //Call the api to send the message
}

module.exports = { createMessage };