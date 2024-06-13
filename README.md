# TalkMe Live Chat Integration

TalkMe is a live chat app designed for seamless communication with website visitors. This guide will help you integrate TalkMe into your website to engage in real-time conversations and provide personalized assistance to your users.

## Demo

You can view the live demo of the project [here](https://day-night-switch-button.netlify.app).

## Screenshot

![Day Night Switch Button](https://raw.githubusercontent.com/SardarTaranjitSingh/talk-me/main/public/assets/images/screenshot.png)

## How to Use TalkMe

### Step 1: Add the Script to Your HTML

Incorporate the following script into your HTML code to activate the TalkMe chat functionality using a demo token.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TalkMe Integration</title>
</head>
<body>
    <!-- Your website content -->

    <!-- TalkMe Chat Integration -->
    <script src="https://talk-me-chat.netlify.app/chatbot/widget.js"></script>
    <script>
        // Initialize the chat
        ChatBot({
            token: "a2c8e1g0i7k6m5o4q3s2u8y9,b7d0f1h2j3l4n5p6r7t8v9x0z1"
        })
    </script>
</body>
</html>
```

### Step 1: Customize the Token

Replace the token in the script with your own if provided. The above example uses a demo token: `a2c8e1g0i7k6m5o4q3s2u8y9`,`b7d0f1h2j3l4n5p6r7t8v9x0z1`.

## Features

- Real-time Conversation: Engage with your website visitors in real-time. The chat bot responds quickly to user inputs, creating a smooth and dynamic exchange similar to human conversation.
- Effortless Integration: Simply add our user-friendly script to your website, and TalkMe will be up and running in no time, facilitating instant, real-time engagement with visitors.

## Technologies Used
- CSS
- React
- JavaScript
