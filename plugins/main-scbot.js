let handler = async function (m, { text, conn}) {

let tks = `
_*>>[ 🇮🇩 SCRIPT BOT WHATSAPP 🇮🇩 ]<<*_
_🎋Sc Bot↓_
Lu tuh cocoknya pakek sc youtube 

🏮Follow me On Instagram:
www.instagram.com/kangmas201

_🎃This SC is under development_
`
conn.sendButton( m.chat, tks, `🎏Script Bot`, 'Go back', '+menu')
}
handler.help = ['scbot']
handler.tags = ['main']

handler.command = /^scbot$/i

module.exports = handler
