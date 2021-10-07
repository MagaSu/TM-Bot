const telegramApi = require("node-telegram-bot-api");
const token = "yourAPI";

const bot = new telegramApi(token, { polling: true });

bot.on("message", (msg) => {
  console.log(msg);
});
