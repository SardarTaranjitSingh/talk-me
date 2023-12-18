import React, { useReducer, createContext, useCallback, useEffect } from 'react'

import * as types from "./myReducer";
import myReducer from "./myReducer";
import BotRepliesJson from "../const/demoBotReplies.json";
import UserDataJson from "../const/demoUserData.json";


const initialState = {
  token_valid: false,
  chatbot_name: null,
  bot_image: null,
  chat_status: false,
  user_token: null,
  all_mesages: []
};

export const MyContext = createContext(initialState);
export const MyProvider = ({ children }) => {
  const [myState, dispatch] = useReducer(myReducer, initialState);
  let botWatingTimeForReply;
  
  
  // Action To Check User Token And Set User Data
  const actionToCheckUserToken = useCallback((userToken) => {
    const isUserMached = UserDataJson.find((data) => data.user_token === userToken)
    if (isUserMached) {
      dispatch({ type: types.SET_CHATBOT_NAME, payload: isUserMached.chatbot_name });
      dispatch({ type: types.SET_BOT_IMAGE, payload: isUserMached.bot_image });
      dispatch({ type: types.SET_CHAT_STATUS, payload: isUserMached.chat_status });
      dispatch({ type: types.SET_USER_TOKEN, payload: isUserMached.user_token });
      dispatch({ type: types.SET_TOKEN_VALID, payload: true });
    }
    else {
      dispatch({ type: types.SET_TOKEN_VALID, payload: false });
    }
  }, []);
  
  
  // Action To Send My Message
  const actionToAddMessage = useCallback(async (oldMessages, newMesage) => {
    let curruntTime = new Date().getTime()
    // It Will Use If `my_message` Is True
    let newInnerMessageFormat = { message: newMesage, time: curruntTime }
    // It Will Use If `my_message` Is False
    let newMessageFormat = {
      my_message: true,
      start_time: curruntTime,
      data: [newInnerMessageFormat]
    }
    // To Check Previous Conversation
    if (oldMessages.length === 0) {
      handleToStartConvertation(newMessageFormat)
    }
    else {
      // To Check If The Last Message Is From My Side Or From The Bot's Side.
      if (oldMessages[oldMessages.length - 1].my_message) {
        handleToCreateSubMessage(oldMessages, newInnerMessageFormat)
      }
      else {
        handleToCreateNewMessage(oldMessages, newMessageFormat)
      }
    }
    return true
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  
  // Add First Message To Start Convertation
  const handleToStartConvertation = (newMessageFormat) => {
    dispatch({
      type: types.ADD_NEW_MESSAGE,
      payload: [newMessageFormat]
    });
  }
  // Add New Sub Message
  const handleToCreateSubMessage = (oldMessages, newInnerMessageFormat) => {
    // Remove Last Array From All Chat
    let trimmedOldMessages = oldMessages.splice(0, oldMessages.length - 1)
    // Get Last Array From All Chat
    let oldMessagesWithNewMessage = oldMessages[oldMessages.length - 1]
    // Add New Message Into Last Array
    oldMessagesWithNewMessage.data.push(newInnerMessageFormat)
    dispatch({
      type: types.ADD_NEW_MESSAGE,
      payload: [...trimmedOldMessages, oldMessagesWithNewMessage]
    });
  }
  // Add New Message
  const handleToCreateNewMessage = (oldMessages, newMessageFormat) => {
    dispatch({
      type: types.ADD_NEW_MESSAGE,
      payload: [...oldMessages, newMessageFormat]
    });
  }
  
  
  const handleOfBotReply = (oldMessages) => {
    let curruntTime = new Date().getTime()
    // It Will Use If `my_message` Is True
    let newInnerMessageFormat = { message: BotRepliesJson[Math.floor(Math.random() * 10)], time: curruntTime }
    // It Will Use If `my_message` Is False
    let newMessageFormat = {
      my_message: false,
      start_time: curruntTime,
      data: [newInnerMessageFormat]
    }
    // To Check Previous Conversation
    if (oldMessages.length === 0) {
      handleToStartConvertation(newMessageFormat)
    }
    else {
      // To Check If The Last Message Is From My Side Or From The Bot's Side.
      if (!oldMessages[oldMessages.length - 1].my_message) {
        handleToCreateSubMessage(oldMessages, newInnerMessageFormat)
      }
      else {
        handleToCreateNewMessage(oldMessages, newMessageFormat)
      }
    }
  }
  
  
  useEffect(() => {
    if (myState.all_mesages.length && myState.all_mesages[myState.all_mesages.length - 1].my_message) {
      // When a user sends a message, reset the timer
      clearTimeout(botWatingTimeForReply);
      // Simulate processing time
      // eslint-disable-next-line react-hooks/exhaustive-deps
      botWatingTimeForReply = setTimeout(() => {
        handleOfBotReply(myState.all_mesages)
      }, 2000);
      // Clean up the timer when the component is unmounted or when userMessage changes
      return () => clearTimeout(botWatingTimeForReply);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myState.all_mesages]);
  

  return (
    <MyContext.Provider
      value={{
        myState,
        actionToAddMessage,
        actionToCheckUserToken

      }}
    >
      {" "} {children} {" "}
    </MyContext.Provider>
  );
};