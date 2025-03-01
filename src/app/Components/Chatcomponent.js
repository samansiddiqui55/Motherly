 "use client"
 import Chatbot from 'react-chatbot-kit';
import React from 'react'
import 'react-chatbot-kit/build/main.css';
import config from '../config';
import ActionProvider from './Actionprovider';
import MessageParser from '../Messageparser';

const Chatcomponent = () => {
  return (
    <>
      <Chatbot
      config = {config}
      actionProvider={ActionProvider}
      messageParser={MessageParser}
      
      />
    </>
  )
}

export default Chatcomponent