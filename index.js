const Discord = require("discord.js");
const client = new Discord.Client();
const dotenv = require("dotenv");
dotenv.config();
client.once("ready", () => {
  console.log("Ready!");
});

client.login(process.env.TOKEN);

const onlyPain = async (message) => {
  if (!message.guild) return;
  if (message.guild.id !== "656249192867430402") return;
  if (message.channel.id !== "811429260845514752") return;
  console.log(message.content);
  if (message.content.trim() !== "<:pain:811426398170120252>")
  setTimeout(function(){
    message.delete();
  }, 100);
}

client.on("message", (message) => {
  onlyPain(message);
});

client.on("messageUpdate", (oldMessage, message) => {
  onlyPain(message);
});