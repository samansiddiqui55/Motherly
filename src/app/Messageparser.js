class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      if (message.trim().length === 0) return; 
  
      this.actionProvider.response(message); 
    }
  }
  
  export default MessageParser;
  