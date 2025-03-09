const TelegramBot = require('node-telegram-bot-api');

// Токен вашего бота
const token = '7701333383:AAHwSbJErpxpAYyouyQ-BtqJrEVw6BvJlGY';
const bot = new TelegramBot(token, {polling: true});

// URL вашего приложения на Vercel
const APP_URL = 'https://order-1.vercel.app';

// Обработчик команды /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  
  // Создаем клавиатуру с одной кнопкой
  const keyboard = {
    inline_keyboard: [
      [{ text: 'Открыть', web_app: { url: APP_URL } }]
    ]
  };

  // Отправляем сообщение с кнопкой
  bot.sendMessage(chatId, 'Нфт рынок', {
    reply_markup: keyboard
  });
});

// Обработка ошибок
bot.on('polling_error', (error) => {
  console.log(error);
});

console.log('Бот запущен и готов к работе!'); 