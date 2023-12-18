import React, { useContext } from 'react'
import { MyContext } from '../../../provider/myContext'

const ChatHead = () => {
  const { myState } = useContext(MyContext)


  return (
    <>
      <div className='chat_header'>
        <div className='chat_header_dv'>
          {myState.bot_image ? (
            <img className='user_image' src={`/assets/images/${myState.bot_image}`} alt={myState.chatbot_name} />
          ) : ''}
          <div className='user_details'>
            <p className='name'>{myState.chatbot_name}</p>
            <span className='status'>{myState.chat_status ? 'active' : 'offline'} </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatHead