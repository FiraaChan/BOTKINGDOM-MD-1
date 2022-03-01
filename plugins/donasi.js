/**
 * TOLONG JANGAN GANTI GAMBARNYA,NOMORKU DAN SAWERIAKU
 * MENDING KALIAN TAMBAHIN NOMOR KALIAN
*/

const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
let handler = async (m) => {
let duit = `*────── 「 ɪᴹ᭄✿ 𝐟𝐢𝐫𝐚𝐚 Ᏼo͢Ꭲ 」 ──────*


HAI GAK JOIN GAK ASIK LU BANG / KAK 🗿
https://chat.whatsapp.com/EAMAuySd2Da3cUCYAvfVMQ`
let message = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/304c38c952c54cce32ce7.jpg' }}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: duit,
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: '🏧 MY WEBSITE',
               url: 'https://github.com/FiraaChan'
             }

           },
               {
             callButton: {
               displayText: 'call',
               phoneNumber: '6283830815715'
             }
           },           
               {
             quickReplyButton: {
               displayText: '👸 Owner',
               id: '.owner',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)|bagiduit$/i

module.exports = handler
