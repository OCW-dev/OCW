const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();


const token = process.env.token;

const webAppurl = 'https://main--marvelous-madeleine-380246.netlify.app/';


console.log(token);

const bot = new TelegramBot(token, {polling: true});

bot.on('message',async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  try {
    if (text === '/start'){
      await bot.sendMessage(chatId, 'Hello', {
        reply_markup: {
          inline_keyboard: [
            [{ text: 'Test', web_app: { url: webAppurl } }]
          ]
        }
      });
  
    }
  } catch (error) {
    console.log(error);
  }
});

