//import './App.css';
import React, { Component } from 'react';
import { emitTest, emitMessage } from './api/ws/api.js';
import socket from './api/ws';
import styles from './App.css';

function MessagesList(props) {
  const { messages } = props;
  return (
    <ul className={styles.msgList}>
      {messages.map((msg, index) => (
        <li key={index}>{msg}</li>
      ))}
    </ul>
  );
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      room1: { messages: [] },
      room2: { messages: [] },
      currentRoom: 'room1',
      message: '',
    };
  }
  componentDidMount() {
    socket.on('new-message', this.handlerNewMessage);
  }

  handlerNewMessage = (room, message) => {
    console.log(room);
    this.setState({
      [room]: {
        messages: [...this.state[room].messages, message],
      },
    });
  };

  switchRoom = (e) => {
    this.setState({ currentRoom: e.target.value });
  };

  sendMessage = () => {
    const { currentRoom, message } = this.state;
    emitMessage(currentRoom, message);
    this.setState({ message: '' });
  };

  render() {
    const {
      currentRoom,
      message,
      room1: { messages: room1Messages },
      room2: { messages: room2Messages },
    } = this.state;
    return (
      <>
        <div className={styles.roomContainer}>
          <MessagesList messages={room1Messages} />
          <MessagesList messages={room2Messages} />
        </div>
        <label>
          <input
            type="radio"
            name={'currentRoom'}
            value={'room1'}
            checked={currentRoom === 'room1'}
            onChange={this.switchRoom}
          />
          <span>Send message to Room1</span>
        </label>
        <br />
        <label>
          <input
            type="radio"
            name={'currentRoom'}
            value={'room2'}
            checked={currentRoom === 'room2'}
            onChange={this.switchRoom}
          />
          <span>Send message to Room2</span>
        </label>
        <div>
          <input
            type="text"
            value={message}
            onChange={(e) => {
              this.setState({ message: e.target.value });
            }}
          />
          <button onClick={this.sendMessage}>Send message</button>
        </div>
      </>
    );
  }
}






  //   render() {
//     return (
//       <>
//         <button onClick={() => emitTest('test', { test: 'test' })}>
//           Send message
//         </button>
//       </>
//     );
//   }

export default App;









/*import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

const socket = new WebSocket('ws://localhost:3000/');

socket.onopen = function (event) {
  alert('Connection is open!!!');
  console.dir(event);
};

socket.onclose = (event) => {
  alert('Connection closed!');
  console.dir(event);
};

socket.onmessage = (event) => {
  console.dir(event.data);
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      messageValue: '',
    };
    this.socket = null;
  }

  componentDidMount() {
    this.socket = new WebSocket('ws://localhost:3000/');
    this.socket.addEventListener('message', (e) => {
      this.addMessages(JSON.parse(e.data));
    });
  }

  addMessages = (messages) => {
    console.log(messages);
    this.setState({
      messages: [...this.state.messages, ...messages],
    });
  };

  sendMessage = () => {
    socket.send(this.state.messageValue);
  };
  handleMsgChange = (e) => {
    this.setState({ messageValue: e.target.value });
  };

  render() {
    return (
      <>
        <ul>
          {this.state.messages.map((m, i) => (
            <li key={i}>{m}</li>
          ))}
        </ul>
        <input
          type="textarea"
          value={this.state.messageValue}
          onChange={this.handleMsgChange}
        />
        <button onClick={this.sendMessage}>Send message</button>
      </>
    );
  }
}
export default App;*/