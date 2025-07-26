let ws;
let username;

function joinChat() {
  const usernameInput = document.getElementById('username');
  username = usernameInput.value.trim();
  if (!username) {
    alert('Please enter a username');
    return;
  }

  // Connect to WebSocket
  ws = new WebSocket('ws://localhost:3000');

  // Handle WebSocket open
  ws.onopen = () => {
    // Send join message
    ws.send(JSON.stringify({ type: 'join', username }));
    // Show chat section, hide join section
    document.getElementById('join-section').style.display = 'none';
    document.getElementById('chat-section').style.display = 'block';
  };

  // Handle incoming messages
  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    const messages = document.getElementById('messages');
    const userList = document.getElementById('user-list');

    switch (data.type) {
      case 'message':
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message';
        messageDiv.textContent = `[${data.timestamp}] ${data.username}: ${data.content}`;
        messages.appendChild(messageDiv);
        messages.scrollTop = messages.scrollHeight; // Auto-scroll to bottom
        break;

      case 'system':
        const systemDiv = document.createElement('div');
        systemDiv.className = 'system-message';
        systemDiv.textContent = data.content;
        messages.appendChild(systemDiv);
        messages.scrollTop = messages.scrollHeight;
        break;

      case 'users':
        userList.innerHTML = '';
        data.users.forEach((user) => {
          const li = document.createElement('li');
          li.textContent = user;
          userList.appendChild(li);
        });
        break;
    }
  };

  // Handle WebSocket errors
  ws.onerror = (error) => {
    console.error('WebSocket error:', error);
    document.getElementById('messages').textContent = 'Error connecting to server';
  };

  // Handle WebSocket close
  ws.onclose = () => {
    const messages = document.getElementById('messages');
    messages.textContent = 'Disconnected from server';
    document.getElementById('join-section').style.display = 'block';
    document.getElementById('chat-section').style.display = 'none';
  };
}

// Handle form submission
document.getElementById('message-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const input = document.getElementById('message-input');
  const content = input.value.trim();

  if (content && ws.readyState === WebSocket.OPEN) {
    ws.send(JSON.stringify({ type: 'message', content }));
    input.value = ''; // Reset input field after sending
  }
});