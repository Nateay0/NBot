const Discord = module.require("discord.js");
const Jimp = require("jimp");
const { MessageEmbed } = require('discord.js');
const cooldown = new Set();

module.exports = {
  name: "phb",
  description: "Another Image Command.",
  aliases: ["pornhub" , "pornhb"],
  usage: "phb <text1/text2>",
  //botPerms: ["ADMINISTRATOR"],//
  //userPerms: ["ADMINISITRATOR"],//

  run: async (client, message, args) => {
    message.delete();

    
    const texto =  args.join("");
    const splitText = texto.split("/");

    let text = splitText[0]
    if (!text) 
      {let Embed1 = new MessageEmbed()
      .setDescription(`**✦ __Command:__** phb\n
      **✦ __Description:__** Another Image Command.\n
      **✦ __Usage:__** \`${message.client.prefix}phb <text1/text2>\`\n
      **✦ __Aliases:__** \`pornhub\` or \`pornhb\``)
      .setTitle("**Syntax Helper - Command**")
      .setThumbnail("https://cdn.discordapp.com/attachments/904704777584263258/909998910192361522/Square_N_LOGO_Clear.png")
      .setImage(`https://cdn.discordapp.com/attachments/904704777584263258/909998910192361522/Square_N_LOGO_Clear.png`)
      .setColor("#FBD570")
      .setFooter('N-Bot — Prefix: n!')
      return message.channel.send({ embeds: [Embed1] })}

    let text2 = splitText[1]
   if (!text2) {let Embed3 = new MessageEmbed()
      .setDescription(`**✦ __Command:__** phb\n
      **✦ __Description:__** Another Image Command.\n
      **✦ __Usage:__** \`${message.client.prefix}phb <text1/text2>\`\n
      **✦ __Aliases:__** \`pornhub\` or \`pornhb\``)
      .setTitle("**Syntax Helper - Command**")
      .setThumbnail("https://cdn.discordapp.com/attachments/904704777584263258/909998910192361522/Square_N_LOGO_Clear.png")
      .setImage(`https://cdn.discordapp.com/attachments/904704777584263258/909998910192361522/Square_N_LOGO_Clear.png`)
      .setColor("#FBD570")
      .setFooter('N-Bot — Prefix: n!')
      return message.channel.send({ embeds: [Embed3] })}
      
    const link = await client.images.image.pornhub({ text,  text2 })
    message.channel.send({
      files: [
        {
          attachment: link
        },
      ],
    });
    
  },
};