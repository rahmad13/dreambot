let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
    let __timers = (new Date - user.lastmining)
    let _timers = (86400000 - __timers)
    let timers = clockString(_timers) 
    let botol = global.botwm
    let minim = `${Math.floor(Math.random() * 248)}`.trim() 
    

   if ( user.ax > 0 ) {
    if (new Date - user.lastmining > 3000000) {

      user.kayu += minim * 1
      user.lastnebang = new Date * 1
            
    m.reply(`Kamu Menebang pohon Di Hutan ${pickRandom(['Musim', 'Rawa', 'Bakau', 'Sabana', '...'])}\n*⚒️Hasil Nebang:* 🪵 Kayu: *${minim}*`)
      } else conn.sendButton( m.chat, `Tunggu ${timers} lagi, untuk menambang`, `${botol}`, `Cek inv`, `.inv`, m)
    } else conn.sendButton( m.chat, `Kamu Tidak Mempunyai *🪓 Kapak* untuk menebang pohon\nBuat Lah Kapak menggunakan kayu dan iron!`, `${botol}`, `Craft Kapak`, `.craft kapak`,m )
  }

handler.help = ['nebang']
handler.tags = ['rpg']
handler.command = /^nebang/i

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
