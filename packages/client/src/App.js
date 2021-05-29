//import logo from './logo.svg';
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
  
  componentDidMount(){
    this.socket = new WebSocket('ws://localhost:3000/');
    this.socket.addEventListener('message', (e)=>{
      this.addMessages(JSON.parse(e.data));
    });
  }

  
  addMessages = (message) => {
    console.log(message);
    this.setState({
      message: [...this.state.message, ...message],
    });
  }

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
        {this.state.messages.map((m, i)=>(<li key={i}>{m}</li>))}
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
export default App;