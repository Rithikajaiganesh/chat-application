document.getElementById('send-btn').addEventListener('click', function() {
    const messageInput = document.getElementById('chat-input');
    const messageText = messageInput.value;

    if (messageText) {
        const newMessage = document.createElement('div');
        newMessage.classList.add('message');

        const messageUser = document.createElement('div');
        messageUser.classList.add('message-user');
        messageUser.textContent = 'You:';

        const messageContent = document.createElement('div');
        messageContent.classList.add('message-text');
        messageContent.textContent = messageText;

        newMessage.appendChild(messageUser);
        newMessage.appendChild(messageContent);

        document.querySelector('.messages').appendChild(newMessage);
        messageInput.value = ''; // Clear the input
        messageInput.focus(); // Focus back to the input field
    }
});
