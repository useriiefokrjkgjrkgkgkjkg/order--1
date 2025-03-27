require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const message = 'Neo app! Хочешь заказать design на высшем уровне?! Быстрее заходи и заказывай🚀';
  
  const keyboard = {
    inline_keyboard: [[
      { text: 'Open Neo app', web_app: { url: process.env.WEBAPP_URL } }
    ]]
  };

  bot.sendMessage(chatId, message, {
    reply_markup: keyboard
  });
});

console.log('Bot is running...'); 