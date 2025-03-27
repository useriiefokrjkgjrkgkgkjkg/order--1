require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.ADMIN_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

// Обработка команды /start для админского бота
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Админский бот запущен! Ваш Chat ID: ' + chatId + '\n\nИспользуйте этот ID в настройках вашего приложения для получения уведомлений о новых заказах.');
});

console.log('Admin bot is running...'); 