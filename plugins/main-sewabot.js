let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
    pepe = 'https://telegra.ph/file/730f48f2524271f9c752a.jpg'
    baper = await fetch(pepe).then(a => a.buffer())
    let listMessage = {
        "title": "Dream∆Bot",
        "description": `
*Dream∆Bot*
        
1 Grup / 30 Hari
Rp. 5,000 Dana
Rp. 5,000 Pulsa Telkomsel
1 Grup / 60 Hari
Rp. 10,000 Dana
Rp. 10,000 Pulsa Telkomsel
tertarik? hubungi:
@6283108164709
`.trim(),
        "listType": "PRODUCT_LIST",
        "productListInfo": {
            "productSections": [
                {
                    "title": "Klik untuk melihat harga",
                    "products": [
                        {
                            "productId": "4696956640315324"
                        }
                    ]
                }
            ],
            "headerImage": {
                "productId": "4696956640315324",
                "jpegThumbnail": baper
            },
            "businessOwnerJid": "6283108164709@s.whatsapp.net"
        },
        "footerText": "wa.me/6283108164709"
    }
    conn.sendMessage(m.chat, listMessage, 'listMessage', { quoted: m, contextInfo: { mentionedJid: conn.parseMention(listMessage.description) } })
}
handler.help = ['sewabot']
handler.tags = ['main']
handler.command = /^sewa(bot|rhmd)$/i

module.exports = handler
