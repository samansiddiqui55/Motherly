import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "Motherly",
  initialMessages: [
    createChatBotMessage("Hello dear, I'm here for you. Tell me what's on your mind."),
  ],
};

export default config;
