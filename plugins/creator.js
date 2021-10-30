function handler(m) {
  this.sendContact(m.chat, '6283108164709', this.getName('6283108164709@s.whatsapp.net'), m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
