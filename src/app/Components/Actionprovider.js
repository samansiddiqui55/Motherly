import OpenAI from 'openai';
import { createChatBotMessage } from 'react-chatbot-kit';

const openai = new OpenAI({
  apiKey: 'b83e64eadf194ca1b941d9fe044e2d54', 
  baseURL: 'https://api.aimlapi.com/',
  dangerouslyAllowBrowser: true,
});

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setStateFunc = setStateFunc;
  }

  
  callGenAI = async (prompt) => {
    try {
      const chatCompletion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: "You are like a mother to the human. Give advice, provide comfort, and support like a caring friend.",
          },
          { role: 'user', content: prompt },
        ],
        temperature: 0.7,
        max_tokens: 150,
      });

      return chatCompletion.choices[0].message.content;
    } catch (error) {
      console.error("Error in AI response:", error);
      return "I'm here for you, dear. Tell me more.";
    }
  };

  
  timer = (ms) => new Promise((res) => setTimeout(res, ms));

  
  generateResponseMessage = async (userMessage) => {
    const response = await this.callGenAI(userMessage);

    
    const responseLines = response.split('\n').filter((msg) => msg.length);
    
    for (const msg of responseLines) {
      const message = this.createChatBotMessage(msg);
      this.updateChatBotState(message);
      await this.timer(1000); 
    }
  };

  
  response = (message) => {
    this.generateResponseMessage(message);
  };

  
  updateChatBotState = (message) => {
    this.setStateFunc((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
