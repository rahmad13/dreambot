let handler = async(m, { conn, command, text }) => {
  // Detek
  if(/nikah/i.test(command)) {
    // Mahar
    let mahar = text
    mahar = mahar.toLowerCase().includes("rp.") ? mahar.split("rp.").join("") : mahar
    mahar = mahar.toLowerCase().includes("rp") ? mahar.split("rp").join("") : mahar
    mahar = mahar.toLowerCase().includes(".") ? mahar.split(".").join("") : mahar
    mahar = Number(mahar)

    // User
    let a = global.db.data.users[m.sender]
    if(a.nikah) return m.reply("Lu udah nikah njir")
    if(a.pasangan == undefined) return m.reply("Kamu tidak memiliki pasangan untuk diajak menikah!")
    let b = global.db.data.users[a.pasangan]

    // Main
    if(mahar < 5000) return m.reply("Mahar minimal 5.000!")
    if(a.money < mahar) return m.reply("Uang kamu tidak cukup!")
    conn.nikah = conn.nikah || [ m.sender, mahar ]

    m.reply(`@${m.sender.split("@")[0]} apakah anda yakin ingin menikahi @${a.pasangan.split("@")[0]} dengan mahar ${mahar}?\nJika anda yakin\nTulis: *+saya terima nikah dan kawinnya dengan mahar yang telah disebutkan*`)
  } else if(/saya/i.test(command)) {
    let a = global.db.data.users[m.sender]
    let b = global.db.data.users[a.pasangan]
    if(conn.nikah && m.sender == conn.nikah[0]) {
      if(m.text.toLowerCase().includes("saya terima nikah dan kawinnya dengan mahar yang telah disebutkan")) {
        m.reply(`Sekarang @${m.sender.split("@")[0]} & @${a.pasangan.split("@")[0]} telah resmi menikah`)
        global.db.data.users[m.sender].nikah = a.pasangan
        global.db.data.users[a.pasangan].nikah = m.sender

        global.db.data.users[m.sender].money -= conn.nikah[1]
        global.db.data.users[a.pasangan].money += conn.nikah[1]

        global.db.data.users[a.pasangan].pasangan = undefined
        global.db.data.users[m.sender].pasangan = undefined

        conn.nikah = undefined
      } else {
        m.reply("Kamu gagal menikah!")
        conn.nikah = undefined
      }
    } else {
      m.reply("Lu siapa?")
    }
  }
}
handler.help = ['nikah']
handler.tags = ['jadian']
handler.command = /^(nikah|saya)/i

module.exports = handler
