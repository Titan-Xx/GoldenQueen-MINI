cmd({
    pattern: "alive",
    desc: "To Check the bot online or no.",
    react: "🧚‍♂️",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

    let ponnasura = `______________________________________

*_ I am alive now golden queen mini  multi device whatsapp user Bot. _*
______________________________________

╔════◇
║ *『 Golden Queen MINI VERSION 』*
║ 
╚════════════════════════╝
╔═════◇
║  『••• 𝗩𝗶𝘀𝗶𝘁 𝗙𝗼𝗿 𝗛𝗲𝗹𝗽 •••』
║❒ *Owner:* https://wa.me/94776734030
║❒ *Official Web:* _https://gqueen.vercel.app
║❒ *WaGroup:* https://chat.whatsapp.com/EjWHPeXKv5cAnJGHKVGt9F
╚════════════════════════╝
_____________________________________


${config.ALIVE_MSG}

*ᴘᴏᴡᴇʀᴅ ʙʏ ɢᴏʟᴅᴇɴQᴜᴇᴇɴ ᴏꜰꜰɪᴄɪᴀʟ ᴛᴇᴀᴍ🧚‍♂️*


`

return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption:ponnasura},{quoted: mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
