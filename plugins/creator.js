const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;ɪᴹ᭄✿ 𝐟𝐢𝐫𝐚𝐚;;;'
                    + 'FN:ɪᴹ᭄✿ 𝐟𝐢𝐫𝐚𝐚\n' // full name
                    + 'ORG:ɪᴹ᭄✿ 𝐟𝐢𝐫𝐚𝐚;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=6283830815715:+62 838-3081-5715\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'ɪᴹ᭄✿ 𝐟𝐢𝐫𝐚𝐚', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
