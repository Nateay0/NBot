const Discord = require("discord.js");

module.exports = {
  name: "invite",
  description: "Get the bot's",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    let embed = new Discord.MessageEmbed()
      .setTitle("Invite Me")
      .setColor("RANDOM")
      .setDescription(
        "**Get N-Bot [Here](https://discord.com/oauth2/authorize?client_id=900132932210008084&scope=bot&permissions=8589934591)**\n**Need assistance? Join our [Support Server](https://discord.gg/jUZdxkXS) now!**"
      )
      .setFooter(`Requested By: ${message.author.username}`);
    message.channel.send({ embeds: [embed] });
  },
};
