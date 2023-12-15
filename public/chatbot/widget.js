// eslint-disable-next-line no-unused-vars
function handleToToggleChat() {
  const chatBoxElement = document.getElementById("chatbot-div");
  const chatOpenButtonElement = document.getElementById("chatbot-open-button");
  const chatCloseButtonElement = document.getElementById("chatbot-close-button");

  if (chatBoxElement.style.transform === "translateX(0vh)" || chatBoxElement.style.transform === "") {
    chatBoxElement.style.transform = "translateX(100vh)";
    chatCloseButtonElement.style.transform = "translateX(100vh)";
    chatOpenButtonElement.style.transform = "translateY(0vh)";
  } else {
    chatBoxElement.style.transform = "translateX(0vh)";
    chatCloseButtonElement.style.transform = "translateX(0vh)";
    chatOpenButtonElement.style.transform = "translateY(100vh)";
  }
}

function addMetaTag() {
  const meta = document.createElement('meta');
  meta.name = "viewport";
  meta.content = "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0";
  document.getElementsByTagName('head')[0].appendChild(meta);
}

function addStyleTag() {
  document.head.innerHTML += `<style>
    #chatbot-open-button{ height: 60px; width: 60px; border-radius: 50%; position: fixed; bottom: 1.5rem; right: 1.5rem; cursor: pointer; background-color: #bfdbfe; background-image: url('https://talk-me-chat.netlify.app/oi.svg'); background-repeat: no-repeat; background-position: center; background-size: 25px; border: 3px solid #fff; box-shadow: 0 0 0 1px #dbeafe; transition: 0.5s;}
    #chatbot-div{ position: fixed; bottom: 1.5rem; right: 1.5rem; width: 320px; height: 512px; border: 1px solid #bfdbfe; box-shadow: 0 0 5px 0 #bfdbfe; background: #fff; border-radius: 8px; transform-origin: bottom; transition: 0.5s; }
    #chatbot-close-button{ height: 28px; width: 28px; border-radius: 50%; position: fixed; bottom: calc((1.5rem + 512px) - 14px); right: calc(1.5rem + 1rem); cursor: pointer; background-color: #E11D48; background-image: url('https://talk-me-chat.netlify.app/ci.svg'); background-repeat: no-repeat; background-position: center; background-size: 25px; border: hidden; transition: 0.5s; }
  </style>`;
}

// eslint-disable-next-line no-unused-vars
function ChatBot(e) {
  // var base_url = 'https://talk-me-chat.netlify.app/chat-widget';
  var base_url = 'http://localhost:3000/chat-widget';
  var token = e ? e.token : null;

  addMetaTag();
  addStyleTag();

  const ChatOpenButton = document.createElement("button");
  ChatOpenButton.setAttribute("onclick", "handleToToggleChat()");
  ChatOpenButton.setAttribute("id", "chatbot-open-button");
  ChatOpenButton.setAttribute("style", "transform: translateY(0vh))");
  document.body.appendChild(ChatOpenButton);

  const ChatBoxDiv = document.createElement("iframe");
  ChatBoxDiv.src = base_url + '?token=' + token;
  ChatBoxDiv.setAttribute("id", "chatbot-div");
  ChatBoxDiv.setAttribute("style", "transform: translateX(100vh)");
  document.body.appendChild(ChatBoxDiv);

  const ChatCloseButton = document.createElement("button");
  ChatCloseButton.setAttribute("onclick", "handleToToggleChat()");
  ChatCloseButton.setAttribute("id", "chatbot-close-button");
  ChatCloseButton.setAttribute("style", "transform: translateX(100vh)");
  document.body.appendChild(ChatCloseButton);
}