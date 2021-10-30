let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text }) => {
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw 'Link Salah'
    let res = await conn.acceptInvite(code)
    m.reply(`Berhasil join grup ${res.gid}`).then(() => {
        var jumlahHari = 86400000 * 0.5
        var now = new Date() * 1
        if (now < global.db.data.chats[m.chat].expired) global.db.data.chats[m.chat].expired += jumlahHari
        else global.db.data.chats[m.chat].expired = now + jumlahHari
         })
    
    conn.reply(res.gid, `*Dream∆Bot* adalah bot whatsapp yang di bangun menggunakan Nodejs, diundang oleh @${m.sender.split`@`[0]} \n\nUntuk Melihat List *Menu* bot ketik */menu*`.trim(), null, { contextInfo: { mentionedJid: [m.sender] } })}
handler.help = ['join <chat.whatsapp.com>']
handler.tags = ['']

handler.command = /^join$/i

handler.owner = true

module.exports = handler