/**
* Hello :D
*/

const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
module.exports = {
  name: "botinfo",
  description: "Shows the bot info",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    const duration = moment
      .duration(client.uptime)
      .format(" D [days], H [hrs], m [mins], s [secs]");

    let embed = new Discord.MessageEmbed()
      .setAuthor("N-Bot", client.user.avatarURL())
      .setColor("RANDOM")
      .setDescription(
        `**Bot Name: **N-Bot \n**Owner: **Natesplanet \n**Total Categories: **8 \n**Total Commands: **${client.commands.size} \n**Users:** ${
          client.users.cache.size
        } \n**Servers:** ${client.guilds.cache.size} \n**Channels:** ${
          client.channels.cache.size
        }`
      )
      .addField(
        "About N-Bot",
        "N-Bot is an open-source multi-purpose discord bot with features like moderation, music, logging, welcomer and so much more!\nYou can find the link to the [GitHub Repo Here](https://github.com/natesplanet/n-bot)"
      )
      .addField(
        "Some Useful Links",
        "**My Website** **[Here](https://natesplanet.github.io/)** \n**Wanna Talk To Natesplanet Join our ** **[Server](https://natesplanet.github.io/)** **for fun ;)**"
      )
      .setFooter("N-Bot By Natesplanet#3285");
    message.channel.send({ embeds: [embed] });
  },
};
