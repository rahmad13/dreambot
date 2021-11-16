let handler = async(m, { conn }) => {
  if(global.db.data.users[m.sender].pasangan) {
    m.reply(`Pasangan anda adalah @${global.db.data.users[m.sender].pasangan.split("@")[0]}`)
  } else {
    m.reply("Kamu belum memiliki istri!")
  }
}

handler.command = /^(pasangan)/i

module.exports = handler
