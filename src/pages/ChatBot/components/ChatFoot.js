import React, { useContext, useState } from 'react'
import { MyContext } from '../../../provider/myContext'

const ChatFoot = () => {
  const { myState, actionToAddMessage } = useContext(MyContext)
  const [newMesage, setNewMesage] = useState('')


  const handleToTypeMessage = (e) => {
    setNewMesage(e.target.value);
  }


  const handleToAddMessage = () => {
    if ((/^\s*$/.test(newMesage))) {
      setNewMesage('');
    } else {
      actionToAddMessage(myState.all_mesages, newMesage);
      setNewMesage('');
    }
  }


  return (
    <>
      <div className='chat_foot'>
        <div className='chat_foot_dv'>
          <input
            className='input_field'
            type="text"
            value={newMesage}
            placeholder='Type your message'
            onChange={(e) => { handleToTypeMessage(e) }}
            onKeyDown={(e) => {
              e.keyCode === 13 && handleToAddMessage(e)
            }}
          />
          <button className='submit_button' onClick={() => { handleToAddMessage() }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}

export default ChatFoot