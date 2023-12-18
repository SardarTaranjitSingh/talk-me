import moment from 'moment'
import React, { useContext } from 'react'
import { MyContext } from '../../../provider/myContext';

const SingleMessage = ({ cbm_item }) => {
  const { myState } = useContext(MyContext)


  const messageFilter = (chatSingleMessage) => {
    const urlRegex = /(https?:\/\/[^\s]+)/;
    const targetURL = chatSingleMessage.match(urlRegex);
    if (targetURL) {
      const newText = chatSingleMessage.replace(targetURL[0], `<a href="${targetURL[0]}" target="_blank">${targetURL[0]}</a>`);
      return { __html: newText };
    }
    return { __html: chatSingleMessage };
  };


  return (
    <>
      <div className={cbm_item.my_message ? 'my_mesage' : 'other_mesage'}>
        {!cbm_item.my_message && myState.bot_image ? (
          <img className='user_image' src={`/assets/images/${myState.bot_image}`} alt={myState.chatbot_name} />
        ) : ''}
        <div className='message_dv'>
          {cbm_item?.data.length ? cbm_item.data.map((d_item) => {
            return (
              <div
                key={d_item.time}
                className='message'
                time={moment(d_item.time).format('h:mm A')}
                dangerouslySetInnerHTML={messageFilter(d_item.message)}></div>
            )
          }) : ''}
        </div>
      </div>
    </>
  )
}

export default SingleMessage