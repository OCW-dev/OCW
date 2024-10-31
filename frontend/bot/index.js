const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();


const token = '7385369570:AAHeA_m0Zg65LO4bNm7fcisEUCngHyLS-8Q';

const webAppurl = 'https://67210e7fb7aba61dc652b94e--taupe-kitsune-b8b1f3.netlify.app/';


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
      });console.log('Bot started');
console.log('Received message:', msg);
console.log('Chat ID:', chatId);
console.log('Text:', text);
  
    }
  } catch (error) {
    console.log(error);
  }
});

