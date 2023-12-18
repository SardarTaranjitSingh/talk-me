import React from 'react'
import '../../assets/css/chat-bot.css'
import ChatHead from './components/ChatHead';
import ChatFoot from './components/ChatFoot';
import ChatBody from './components/ChatBody';
  
  
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  
  
  return (
    <>
      <div className='chat_wrrpr'>
        <div className='chat_dv'>
          <ChatHead />
          <ChatBody />
          <ChatFoot />
        </div>
      </div>
    </>
  )
}
