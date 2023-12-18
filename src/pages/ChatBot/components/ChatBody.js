import React, { useContext, useEffect, useRef } from 'react'
import { MyContext } from '../../../provider/myContext';
import SingleMessage from './SingleMessage';

const ChatBody = () => {
  const { myState } = useContext(MyContext)
  const chatBodyDv = useRef(null);


  const scrollToLastMessage = () => {
    const lastChildElement = chatBodyDv.current?.lastElementChild;
    lastChildElement?.scrollIntoView({ behavior: 'instant' });
  };


  useEffect(() => {
    scrollToLastMessage();
  }, []);

  useEffect(() => {
    scrollToLastMessage();
  }, [myState.all_mesages]);


  return (
    <>
      <div className='chat_body'>
        <div className='chat_body_dv' ref={chatBodyDv}>
          {myState.all_mesages.length ? myState.all_mesages.map((cbm_item) => {
            return (
              <SingleMessage key={cbm_item.start_time} cbm_item={cbm_item} />
            )
          }) : (
            <div className='empty_message'>
              <img src="/logo.svg" alt="" />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ChatBody