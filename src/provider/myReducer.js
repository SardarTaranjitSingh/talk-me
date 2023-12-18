export const SET_ALL_MESSAGES = 'SET_ALL_MESSAGES';
export const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';
export const SET_TOKEN_VALID = 'SET_TOKEN_VALID';
export const SET_CHATBOT_NAME = 'SET_CHATBOT_NAME';
export const SET_BOT_IMAGE = 'SET_BOT_IMAGE';
export const SET_USER_TOKEN = 'SET_USER_TOKEN';
export const SET_CHAT_STATUS = 'SET_CHAT_STATUS';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case SET_ALL_MESSAGES: return {
      ...state,
      all_mesages: action.payload
    };
    case ADD_NEW_MESSAGE: return {
      ...state,
      all_mesages: action.payload
    };

    case SET_TOKEN_VALID: return {
      ...state,
      token_valid: action.payload
    };
    case SET_CHATBOT_NAME: return {
      ...state,
      chatbot_name: action.payload
    };
    case SET_BOT_IMAGE: return {
      ...state,
      bot_image: action.payload
    };
    case SET_CHAT_STATUS: return {
      ...state,
      chat_status: action.payload
    };
    case SET_USER_TOKEN: return {
      ...state,
      user_token: action.payload
    };
    
  }
};