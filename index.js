const telegramApi = require("node-telegram-bot-api");
const token = "2064361463:AAHQYZdz6dFSXDKjy_ETU0L43GQFh-hZXv4";
const fs = require("fs");
const youtubedl = require("youtube-dl-exec");

const bot = new telegramApi(token, { polling: true });

// let video = "";

const start = () => {
  bot.on("message", async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;
    const username = msg.chat.first_name;
    const mode = "youtube";

    if (text === "/start") {
      await bot.sendSticker(
        chatId,
        "https://tlgrm.ru/_/stickers/b50/063/b5006369-8faa-44d7-9f02-1ca97d82cd49/1.webp"
      );
      await bot.sendMessage(chatId, "Пошла жара...");
    }
    if (mode === "youtube") {
      console.log("Test video sending");
      const video = await youtubedl(text, {
        noWarnings: true,
        preferFreeFormats: true,
      }).then((output) => console.log(output));
      bot.sendMessage(chatId, output);
    }
  });
};

start();
