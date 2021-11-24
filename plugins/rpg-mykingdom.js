let { MessageType } = require('@adiwajshing/baileys')
let PhoneNumber = require('awesome-phonenumber')
let { buttonsMessage, contactsArray, image, MimeType } = MessageType
let fs = require('fs')
//LU SIAPA?
//JANGAN COLONG ANJG
let handler = async (m, { conn, text, usedPrefix }) => {

let imgk = fs.readFileSync('./lib/kerajaan.jpg')

let kingdom = global.db.data.users[m.sender]

if (kingdom.created == false) return m.reply('kingdom telah dibuat')


let kerajaan = global.db.data.users[m.sender].kingdomName
let trops = global.db.data.users[m.sender].troops
let lvl = global.db.data.users[m.sender].lvl
let populasi = global.db.data.users[m.sender].population
let name = global.db.data.users[m.sender].namk
let aliance = global.db.data.users[m.sender].aliance
let koin = global.db.data.users[m.sender].koin

let benteng = global.db.data.users[m.sender].fortress
let rs = global.db.data.users[m.sender].rumahsakit
let kamp = global.db.data.users[m.sender].troopcamp

let batu = global.db.data.users[m.sender].besi
let kayu = global.db.data.users[m.sender].kayu
let besi = global.db.data.users[m.sender].batu

let caption = `
_[ ❕ ]YOUR KINGDOM INFO_
🏰Name Kerajaan: ${kerajaan}
👑Name King: ${name}
👥populasi: ${populasi}
👮pasukan: ${trops}
🎋level: ${lvl}
💹Ekonomi SDA:
💰Koin: ${koin}
🌳Kayu: ${kayu}
⛓️Besi: ${besi}
🪨Batu: ${batu}
🏗️Fasilitas:
🏕️kamp pasukan: ${kamp == 0 ? 'tidak punya kamp pasukan' : '' || kamp == 1 ? 'kamp pasukan mini' : '' || kamp == 2 ? 'kamp pasukan sedang' : ''}
🏥rumah sakit: ${ rs == 0 ? 'tidak punya rumah sakit' : '' }
🏯Benteng level:
${ benteng == 0 ? 'Tidak punya benteng' : '' || benteng == 1 ? 'benteng kayu' : '' || benteng == 2 ? 'benteng beton' : '' }
⚔️Last war:-
🏳️teman Aliansi:
${aliance.replace(/@.+/, '')}
⚔️To war typing:
${usedPrefix}war @mention
🏰Bangun Dan level up kerajaan
${usedPrefix}build <type>
♨️Untuk Mengambil Sumber daya:
${usedPrefix}getsda
`.trim()


conn.sendFile( m.chat, imgk, 'kerajaa.jpg', caption, m, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text)
    }
  })
}

handler.help = ['mykingdom','mykrjn','kerajaanku']
handler.tags = ['rpg']
handler.command = /^(mykingdom|kerajaanku)/i

handler.owner = false
handler.register = false

module.exports = handler
