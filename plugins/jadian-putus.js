let handler = async (m, { conn }) => {
  ayg = global.db.data.users[m.sender]

  if(ayg.pasangan == ""){
    return conn.reply(m.chat,`*Sadar diri bangsat, anda tidak berpacaran dengan siapa siapa.*`,m)
  }
  
  beb = global.db.data.users[global.db.data.users[m.sender].pasangan]

  if (typeof beb == "undefined"){
    conn.reply(m.chat,`*Berhasil putus hubungan dengan @${global.db.data.users[m.sender].pasangan('@')[0]}*\n\n*Masih banyak manusia lain njing, jadi jangan bundir dulu !*`,m,{contextInfo: {
      mentionedJid: [global.db.data.users[m.sender].pasangan]
    }})
    ayg.pasangan = ""
  }

  if (m.sender == beb.pasangan){
    conn.reply(m.chat,`*Berhasil putus hubungan dengan @${global.db.data.users[m.sender].pasangan.split('@')[0]}*\n\n*Masih banyak manusia lain njing, jadi jangan bundir dulu !*`,m,{contextInfo: {
      mentionedJid: [global.db.data.users[m.sender].pasangan]
    }})
    ayg.pasangan = ""
    beb.pasangan = ""
  }else {
    conn.reply(m.chat,`*Sadar diri bangsat, anda tidak berpacaran dengan siapa siapa.*`,m)
  }
}
handler.help = ['putus']
handler.tags = ['jadian']
handler.command = /^(putus)$/i
handler.group = true
handler.fail = null
module.exports = handler