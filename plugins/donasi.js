let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `
┌〔 Donasi • Emoney 〕
├ Dana [083108164709]
└────

┌〔 Donasi • Pulsa 〕
├ Axis [083108164709]
├ Telkomsel [085336060095]
└────
`.trim(), '® DreamBot', 'Pemilik Bot', '.owner')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
