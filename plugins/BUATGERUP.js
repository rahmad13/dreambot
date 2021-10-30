let handler  = async (m, { conn, text }) => {
   let [namagc, partici] = text.split('|')
   let name = conn.getName(conn.user.jid)
   const petik = '```'
   if (!namagc) throw 'Format Salah!!!'
   if (!partici) partici = `@${m.sender.split('@')[0]}`
   if (!namagc) namagc = text
   ha = await conn.groupCreate(namagc, conn.parseMention(partici))
   m.reply(`${petik}Group Telah Dibuat @${m.sender.replace(/@.+/, '')}${petik}\n\n*Link GC : https://chat.whatsapp.com/${await conn.groupInviteCode(ha.gid)}*`)
  }
handler.help = ['buatgrup']
handler.tags = ['tools']
handler.command = /^(buatgrup)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.private = false

handler.admin = false
handler.botAdmin = false
handler.fail = null

module.exports = handler
