import React, { useState, useEffect, useRef } from 'react'
import '../../assets/css/chat-bot.css'
import DemoChatData from "../../data/demoChatData.json";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  // console.log('DemoChatData', DemoChatData)
  const [chatBotMessages, setChatBotMessages] = useState(DemoChatData ? DemoChatData : [])
  const [newMesage, setNewMesage] = useState('')
  const chatBodyDv = useRef(null);





  const handleToTypeMessage = (e) => {
    setNewMesage(e.target.value);
  }

  const handleToAddMessage = (e) => {
    // console.log('handleToAddMessage');

    setChatBotMessages([
      ...chatBotMessages,
      {
        my_message: true,
        start_time: "May 25, 2022, 9:00 AM",
        data: [
          {
            message: newMesage,
            time: "May 25, 2022, 9:00 AM"
          }
        ]
      }
    ])
    setNewMesage('');
  }

  const scrollToLastMessage = () => {
    const lastChildElement = chatBodyDv.current?.lastElementChild;
    lastChildElement?.scrollIntoView({ behavior: 'instant' });
  };

  const messageFilter = (chatSingleMessage) => {
    const urlRegex = /(https?:\/\/[^\s]+)/;
    const targetURL = chatSingleMessage.match(urlRegex);
    if (targetURL) {
      const newText = chatSingleMessage.replace(targetURL[0], `<a href="${targetURL[0]}" target="_blank">${targetURL[0]}</a>`);
      return { __html: newText };
    }
    return { __html: chatSingleMessage };
  };





  useEffect(() => {
    scrollToLastMessage();
  }, []);

  useEffect(() => {
    scrollToLastMessage();
  }, [chatBotMessages]);





  return (
    <>





      <div className='chat_wrrpr'>
        <div className='chat_dv'>





          <div className='chat_header'>
            <div className='chat_header_dv'>
              <img className='user_image' src="/assets/images/user.jpg" alt="Jasmine Thompson" />
              <div className='user_details'>
                <p className='name'>Jasmine Thompson</p>
                <span className='status'>Active</span>
              </div>
            </div>
          </div>





          <div className='chat_body'>
            <div className='chat_body_dv' ref={chatBodyDv}>
              {chatBotMessages && chatBotMessages.map((cbm_item) => {
                return (
                  <div key={cbm_item.start_time} className={cbm_item.my_message ? 'my_mesage' : 'other_mesage'}>
                    {!cbm_item.my_message && <img className='user_image' src="/assets/images/user.jpg" alt="Jasmine Thompson" />}
                    <div className='message_dv'>
                      {cbm_item.data.map((d_item) => {
                        return (
                          <div key={d_item.time} className='message' dangerouslySetInnerHTML={messageFilter(d_item.message)}></div>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>





          <div className='chat_foot'>
            <div className='chat_foot_dv'>
              <input
                className='input_field'
                type="text"
                value={newMesage}
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





        </div>
      </div>





    </>
  )
}
