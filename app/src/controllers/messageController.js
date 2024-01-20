const sendMessage = (event) => {
    event.preventDefault();

    const messageInfo = {
        name: "user name",
        messageText: event.target.parentElement.firstChild.value
    }

    console.log(messageInfo)

    event.target.parentElement.firstChild.value = '';
}

export default sendMessage;