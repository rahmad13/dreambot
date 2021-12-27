let simple = require('./lib/simple')
let util = require('util')
let fs = require('fs')
let chalk = require('chalk')
let { MessageType } = require('@adiwajshing/baileys')

const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(resolve, ms))
module.exports = {
  async handler(chatUpdate) {
    if (global.db.data == null) await global.loadDatabase()
    if (!chatUpdate.hasNewMessage) return
    if (!chatUpdate.messages && !chatUpdate.count) return
    let m = chatUpdate.messages.all()[0]
    try {
      simple.smsg(this, m)
      switch (m.mtype) {
        case MessageType.image:
        case MessageType.video:
        case MessageType.audio:
          if (!m.key.fromMe) await delay(1000)
          if (!m.msg.url) await this.updateMediaMessage(m)
          break
      }
      m.exp = 0
      m.limit = false
      try {
        let user = global.db.data.users[m.sender]
        if (typeof user !== 'object') global.db.data.users[m.sender] = {}
        if (user) {
               if (!isNumber(user.healt)) user.healt = 0
            if (!isNumber(user.stamina)) user.stamina = 0
            if (!isNumber(user.level)) user.level = 0
            if (!isNumber(user.exp)) user.exp = 0
            if (!isNumber(user.limit)) user.limit = 10
            if (!isNumber(user.lastclaim)) user.lastclaim = 0
            if (!isNumber(user.money)) user.money = 0
            
            //
            if (!isNumber(user.diamond)) user.diamond = 0
            if (!isNumber(user.iron)) user.iron = 0
            if (!isNumber(user.string)) user.string= 0


            if (!isNumber(user.common)) user.common = 0
            if (!isNumber(user.uncommon)) user.uncommon = 0
            if (!isNumber(user.mythic)) user.mythic = 0
            if (!isNumber(user.legendary)) user.legendary = 0
            if (!isNumber(user.pet)) user.pet = 0
            if (!isNumber(user.psepick)) user.psepick = 0
            if (!isNumber(user.psenjata)) user.psenjata = 0
        
            if (!isNumber(user.potion)) user.potion = 0
            if (!isNumber(user.sampah)) user.sampah = 0
            if (!isNumber(user.armor)) user.armor = 0
            if (!isNumber(user.pancing)) user.pancing = 0
            
            if (!isNumber(user.kucing)) user.kucing = 0
            if (!isNumber(user.kucinglastclaim)) user.kucinglastclaim = 0
            if (!isNumber(user.kuda)) user.kuda = 0
            if (!isNumber(user.kudalastclaim)) user.kudalastclaim = 0
            if (!isNumber(user.rubah)) user.rubah = 0
            if (!isNumber(user.rubahlastclaim)) user.rubahlastclaim = 0
            if (!isNumber(user.anjing)) user.anjing = 0
            if (!isNumber(user.anjinglastclaim)) user.anjinglastclaim = 0
            //Penambah STAMINA
             if (!isNumber(user.apel)) user.apel = 0
             if (!isNumber(user.ayamb)) user.ayamb = 0
             if (!isNumber(user.ayamg)) user.ayamg = 0
             if (!isNumber(user.sapir)) user.sapir = 0
             if (!isNumber(user.ssapi)) user.ssapi = 0
             if (!isNumber(user.esteh)) user.esteh = 0
             if (!isNumber(user.leleb)) user.leleb = 0
             if (!isNumber(user.leleg)) user.leleg = 0
             
            if (!'Banneduser' in user) user.Banneduser = false
            if (!'BannedReason' in user) user.BannedReason = ''
            if (!isNumber(user.warn)) user.warn = 0

            if (!isNumber(user.afk)) user.afk = -1
            if (!'afkReason' in user) user.afkReason = ''
            
            if (!isNumber(user.pedagang)) user.pedagang = false
            if (!isNumber(user.polisi)) user.polisi = false
            if (!isNumber(user.dokter)) user.dokter = false
            if (!isNumber(user.ojek)) user.ojek = false
            if (!isNumber(user.petani)) user.petani = false
            if (!isNumber(user.kuli)) user.kuli = false
            if (!isNumber(user.montir)) user.montir = false
            if (!isNumber(user.job)) user.job = false
            //last Job
            if (!isNumber(user.lastjb)) user.lastjb = 0
            
            if (!isNumber(user.nila)) user.nila = 0
            if (!isNumber(user.bawal)) user.bawal = 0
            if (!isNumber(user.lele)) user.lele = 0
            if (!isNumber(user.paus)) user.paus = 0
            if (!isNumber(user.kepiting)) user.kepiting = 0
           if (!isNumber(user.gurita)) user.gurita = 0
     if (!isNumber(user.cumi)) user.cumi= 0
     if (!isNumber(user.buntal)) user.buntal = 0
     if (!isNumber(user.dory)) user.dory = 0
     if (!isNumber(user.lumba)) user.lumba = 0
     if (!isNumber(user.lobster)) user.lobster = 0
     if (!isNumber(user.hiu)) user.hiu = 0
     if (!isNumber(user.udang)) user.udang = 0
     if (!isNumber(user.ikan)) user.ikan = 0
     if (!isNumber(user.orca)) user.orca = 0
        
        if (!isNumber(user.banteng)) user.banteng = 0
     if (!isNumber(user.harimau)) user.harimau = 0
     if (!isNumber(user.gajah)) user.gajah = 0
     if (!isNumber(user.kambing)) user.kambing = 0
     if (!isNumber(user.panda)) user.panda = 0
     if (!isNumber(user.buaya)) user.buaya = 0
     if (!isNumber(user.kerbau)) user.kerbau = 0
     if (!isNumber(user.sapi)) user.sapi = 0
     if (!isNumber(user.monyet)) user.monyet = 0
     if (!isNumber(user.babihutan)) user.babihutan = 0
     if (!isNumber(user.babi)) user.babi = 0
     if (!isNumber(user.ayam)) user.ayam = 0
     //
      if (!isNumber(user.lastberbru)) user.lastberbru = 0
            if (!isNumber(user.anakkucing)) user.anakkucing = 0
            if (!isNumber(user.anakkuda)) user.anakkuda = 0
            if (!isNumber(user.anakrubah)) user.anakrubah = 0
            if (!isNumber(user.anakanjing)) user.anakanjing = 0
            if (!isNumber(user.makananpet)) user.makananpet = 0

            if (!isNumber(user.antispam)) user.antispam = 0
            if (!isNumber(user.antispamlastclaim)) user.antispamlastclaim = 0

            if (!isNumber(user.kayu)) user.kayu = 0
            if (!isNumber(user.batu)) user.batu = 0
            if (!isNumber(user.besi)) user.besi = 0
            if (!isNumber(user.emas)) user.emas = 0
            if (!isNumber(user.makanan)) user.makanan = 0
            
            if (!isNumber(user.sword)) user.sword = 0
            if (!isNumber(user.sworddurability)) user.sworddurability = 0
            if (!isNumber(user.pickaxe)) user.pickaxe = 0
            if (!isNumber(user.pickaxedurability)) user.pickaxedurability = 0
            if (!isNumber(user.ax)) user.ax = 0
            if (!isNumber(user.axdurability)) user.axdurability = 0
            if (!isNumber(user.fishingrod)) user.fishingrod = 0
            if (!isNumber(user.fishingroddurability)) user.fishingroddurability = 0
           //KERAJAAN
           if (!('kingdom' in user)) user.kingdom = false
            if (!('mission' in user)) user.mission = {}
            if (!isNumber(user.trofi)) user.trofi= 0
            if (!user.rtrofi) user.rtrofi = 'Perunggu'
            if (!isNumber(user.rumahsakit)) user.rumahsakit= 0
            if (!isNumber(user.fortress)) user.fortress = 0
            if (!isNumber(user.troopcamp)) user.troopcamp = 0
            if (!isNumber(user.shield)) user.shield = false
            if (!isNumber(user.pertanian)) user.pertanian = 0
            if (!isNumber(user.tambang)) user.tambang = 0
           //
            //LAST
            if (!isNumber(user.lastadventure)) user.lastadventure = 0
            if (!isNumber(user.lastnebang)) user.lastnebang = 0
            if (!isNumber(user.lastfishing)) user.lastfishing = 0
            if (!isNumber(user.lastdungeon)) user.lastdungeon = 0
            if (!isNumber(user.lastbansos)) user.lastbansos = 0
            if (!isNumber(user.lastsda)) user.lastsda = 0
            if (!isNumber(user.lastwar)) user.lastwar = 0
            if (!isNumber(user.lastduel)) user.lastduel = 0
            if (!isNumber(user.lastmining)) user.lastmining = 0
            if (!isNumber(user.lasthunt)) user.lasthunt = 0
            if (!isNumber(user.lastweekly)) user.lastweekly = 0
            if (!isNumber(user.lastmonthly)) user.lastmontly = 0
         
            if (!('registered' in user)) user.registered = false
            if (!user.registered) {
                if (!('name' in user)) user.name = this.getName(m.sender)
                if (!isNumber(user.age)) user.age = -1
                if (!isNumber(user.regTime)) user.regTime = -1
                if (!user.role) user.role = 'Beginner'
            }
            if (!('autolevelup' in user)) user.autolevelup = false
            if (!('pasangan' in user)) user.pasangan = ''
            if (!('nikah' in user)) user.nikah = ''
        } else global.db.data.users[m.sender] = {
          healt: 100,
            stamina: 100,
            level: 0,
            //
            rumahsakit: 0,
            troopcamp: 0,
            fortress: 0,
            makanan: 0,
            shield: false,
            //
            exp: 0,
            limit: 10,
            lastclaim: 0,
            money: 0,
            diamond: 0,
            iron: 0,
            string: 0,
            common: 0,
            uncommon: 0,
            mythic: 0,
            legendary: 0,
            pet: 0,
            psepick: 0,
            psenjata: 0,
            potion: 0,
            pancing: 0,
            sampah: 0,
            armor: 0,
            kucing: 0,
            kucinglastclaim: 0,
            kuda: 0,
            kudalastclaim: 0,
            rubah: 0,
            rubahlastclaim: 0,
            anjing: 0,
            anjinglastclaim: 0,
            Banneduser: false,
            BannedReason: '',
            warn: 0,
            afk: -1,
            afkReason: '',
            //
            polisi: 0,
          petani: 0,
          pedagang: 0,
          ojek: 0,
          dokter: 0,
          kuli: 0,
          montir: 0,
          //
          lele: 0,
          nila: 0,
          bawal: 0,
          paus: 0,
    kepiting: 0,
    gurita: 0,
    cumi: 0,
    buntal: 0,
    dory: 0,
    lumba: 0,
    lobster: 0,
    hiu: 0,
    udang: 0,
    ikan: 0,
    orca: 0,
    banteng: 0,
    harimau: 0,
    gajah: 0,
    kambing: 0,
    panda: 0,
    buaya: 0,
    kerbau : 0,
    sapi: 0,
    monyet : 0,
    babihutan: 0,
    babi: 0,
    ayam: 0,
    
    apel: 0,
    ayamb: 0,
    ayamg: 0,
    ssapi: 0,
    sapir: 0,
    leleb: 0,
    leleg: 0,
    esteh: 0,
    
            anakkucing: 0,
            anakkuda: 0,
            anakrubah: 0,
            anakanjing: 0,
            makananpet: 0,
            antispam: 0,
            antispamlastclaim: 0,
            //SDA
            kayu: 0,
            batu: 0,
            besi: 0,
            emas: 0,
            makanan: 0,
            //
            sword: 0,
            sworddurability: 0,
            pickaxe: 0,
            pickaxedurability: 0,
            ax: 0,
            axdurability: 0,
            fishingrod: 0,
            fishingroddurability: 0,
            //Last
            lastadventure: 0,
            lastnebang: 0,
            lastfishing: 0,
            lastdungeon: 0,
            lastsda: 0,
            lastwar: 0,
            lastduel: 0,
            lastmining: 0,
            lasthunt: 0,
            lastjb: 0,
            lastweekly: 0,
            lastmonthly: 0,
            registered: false,
            name: this.getName(m.sender),
            age: -1,
            regTime: -1,
            role: 'Beginner',
            trofi: 0,
            rtrofi: 'perunggu',
            pasangan: '',
            nikah: '', 
            autolevelup: false,
        }

        let chat = global.db.data.chats[m.chat]
        if (typeof chat !== 'object') global.db.data.chats[m.chat] = {}
        if (chat) {
          if (!('isBanned' in chat)) chat.isBanned = false
          if (!('welcome' in chat)) chat.welcome = true
          if (!('detect' in chat)) chat.detect = true
          if (!('sWelcome' in chat)) chat.sWelcome = ''
          if (!('sBye' in chat)) chat.sBye = ''
          if (!('sPromote' in chat)) chat.sPromote = ''
          if (!('sDemote' in chat)) chat.sDemote = ''
          if (!('antiLink' in chat)) chat.antiLink = true
          if (!('autoread' in chat)) chat.autoread = false
          if (!('broadcast' in chat)) chat.broadcast = true
          if (!('clear' in chat)) chat.clear = false
          if (!isNumber(chat.clearTime)) chat.clearTime = (new Date() * 1) + 3600000 * 1
          if (!('delete' in chat)) chat.delete = true
          if (!('desc' in chat)) chat.desc = true
          if (!('download' in chat)) chat.download = true
          if (!('getmsg' in chat)) chat.getmsg = false
          if (!isNumber(chat.groupTime)) chat.groupTime = 0
          if (!('stiker' in chat)) chat.stiker = false
          if (!('viewonce' in chat)) chat.viewonce = true
        } else global.db.data.chats[m.chat] = {
          isBanned: false,
          welcome: true,
          detect: true,
          sWelcome: '',
          sBye: '',
          sPromote: '',
          sDemote: '',
          antiLink: true,
          autoread: false,
          broadcast: true,
          clear: false,
          clearTime: (new Date() * 1) + 3600000 * 1,
          delete: true,
          desc: true,
          download: true,
          getmsg: false,
          groupTime: 0,
          stiker: false,
          viewonce: true,
        }

        let settings = global.db.data.settings[this.user.jid]
        if (typeof settings !== 'object') global.db.data.settings[this.user.jid] = {}
        if (settings) {
          if (!'anon' in settings) settings.anon = true
          if (!'anticall' in settings) settings.anticall = true
          if (!'antispam' in settings) settings.antispam = true
          if (!'antitroli' in settings) settings.antitroli = true
          if (!'game' in settings) settings.game = true
          if (!'group' in settings) settings.group = false
          if (!'jadibot' in settings) settings.jadibot = false
          if (!'private' in settings) settings.private = false
          if (!'restrict' in settings) settings.restrict = false
          if (!'self' in settings) settings.self = false
          if (!('tosw' in settings)) settings.tosw = '6283128734012@s.whatsapp.net'
          if (!('playlist' in settings)) settings.playlist = ['37i9dQZEVXbObFQZ3JLcXt', '37i9dQZF1DXa2EiKmMLhFD']
        } else global.db.data.settings[this.user.jid] = {
          anon: true,
          anticall: true,
          antispam: true,
          antitroli: true,
          game: true,
          group: false,
          jadibot: false,
          private: false,
          restrict: false,
          self: false,
          tosw: '6283128734012@s.whatsapp.net',
          playlist: ['37i9dQZEVXbObFQZ3JLcXt', '37i9dQZF1DXa2EiKmMLhFD'],
        }
      } catch (e) {
        console.error(e)
      }
      if (!m.fromMe && db.data.settings[this.user.jid].self) return
      if (db.data.settings[this.user.jid].private && m.chat.endsWith('g.us')) return
      // if (m.chat.endsWith('broadcast')) return
      if (typeof m.text !== 'string') m.text = ''
      for (let name in global.plugins) {
        let plugin = global.plugins[name]
        if (!plugin) continue
        if (plugin.disabled) continue
        if (!plugin.all) continue
        if (typeof plugin.all !== 'function') continue
        try {
          await plugin.all.call(this, m, chatUpdate)
        } catch (e) {
          if (typeof e === 'string') continue
          console.error(e)
        }
      }
      if (m.isBaileys) return
      m.exp += Math.ceil(Math.random() * 20)

      let usedPrefix
      let _user = global.db.data && global.db.data.users && global.db.data.users[m.sender]

      let isROwner = [global.conn.user.jid, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
      let isOwner = isROwner || m.fromMe
      let isPrems = isROwner || db.data.users[m.sender].premium
      let groupMetadata = m.isGroup ? this.chats.get(m.chat).metadata || await this.groupMetadata(m.chat) : {} || {}
      let participants = m.isGroup ? groupMetadata.participants : [] || []
      let user = m.isGroup ? participants.find(u => u.jid == m.sender) : {} // data pengguna
      let bot = m.isGroup ? participants.find(u => u.jid == this.user.jid) : {} // data kamu (sebagai bot)
      let isAdmin = user.isAdmin || user.isSuperAdmin || false // apakah pengguna admin?
      let isBotAdmin = bot.isAdmin || bot.isSuperAdmin || false // apakah kamu (sebagai bot) admin?
      for (let name in global.plugins) {
        let plugin = global.plugins[name]
        if (!plugin) continue
        if (plugin.disabled) continue
        if (!global.db.data.settings[this.user.jid].restrict) if (plugin.tags && plugin.tags.includes('admin')) continue
        const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
        let _prefix = plugin.customPrefix ? plugin.customPrefix : conn.prefix ? conn.prefix : global.prefix
        let match = (_prefix instanceof RegExp ? // RegExp Mode?
          [[_prefix.exec(m.text), _prefix]] :
          Array.isArray(_prefix) ? // Array?
            _prefix.map(p => {
              let re = p instanceof RegExp ? // RegExp in Array?
                p :
                new RegExp(str2Regex(p))
              return [re.exec(m.text), re]
            }) :
            typeof _prefix === 'string' ? // String?
              [[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]] :
              [[[], new RegExp]]
        ).find(p => p[1])
        if (typeof plugin.before === 'function') if (await plugin.before.call(this, m, {
          match,
          conn: this,
          participants,
          groupMetadata,
          user,
          bot,
          isROwner,
          isOwner,
          isAdmin,
          isBotAdmin,
          isPrems,
          chatUpdate,
        })) continue
        if (typeof plugin !== 'function') continue
        if ((usedPrefix = (match[0] || '')[0])) {
          let noPrefix = m.text.replace(usedPrefix, '')
          let [command, ...args] = noPrefix.trim().split` `.filter(v => v)
          args = args || []
          let _args = noPrefix.trim().split` `.slice(1)
          let text = _args.join` `
          command = (command || '').toLowerCase()
          let fail = plugin.fail || global.dfail // When failed
          let isAccept = plugin.command instanceof RegExp ? // RegExp Mode?
            plugin.command.test(command) :
            Array.isArray(plugin.command) ? // Array?
              plugin.command.some(cmd => cmd instanceof RegExp ? // RegExp in Array?
                cmd.test(command) :
                cmd === command
              ) :
              typeof plugin.command === 'string' ? // String?
                plugin.command === command :
                false

          if (!isAccept) continue
          m.plugin = name
          if (m.chat in global.db.data.chats || m.sender in global.db.data.users) {
            let chat = global.db.data.chats[m.chat]
            let user = global.db.data.users[m.sender]
            let set = global.db.data.settings[this.user.jid]
            if ((!isPrems || !m.isGroup) && set.group) return
            if (!(['g-enable.js', 'o-unbanchat.js', 'i-donate.js', 'i-owner.js', 'i-info.js'].includes(name) || isPrems) && chat && chat.isBanned) return
            if (!(['g-enable.js', 'o-unbanchat.js', 'i-donate.js', 'i-owner.js', 'i-info.js'].includes(name) || isPrems) && user && user.banned) return
          }
          if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) { // keduanya owner
            fail('owner', m, this)
            continue
          }
          if (plugin.rowner && !isROwner) { // owner sebnarnya
            fail('rowner', m, this)
            continue
          }
          if (plugin.owner && !isOwner) { // no owner / yang numpang
            fail('owner', m, this)
            continue
          }
          if (plugin.premium && !isPrems) { // premium
            fail('premium', m, this)
            continue
          }
          if (plugin.group && !m.isGroup) { // hanya grup
            fail('group', m, this)
            continue
          } else if (plugin.botAdmin && !isBotAdmin) { // kamu (sebagai bot) admin
            fail('botAdmin', m, this)
            continue
          } else if (plugin.admin && !isAdmin) { // pengguna admin
            fail('admin', m, this)
            continue
          }
          if (plugin.private && m.isGroup) { // chat pribadi
            fail('private', m, this)
            continue
          }
          if (plugin.register == true && _user.registered == false) { // daftar
            fail('unreg', m, this)
            continue
          }
          if (plugin.game && !global.db.data.settings[this.user.jid].game) { // mode game
            fail('game', m, this)
            continue
          }

          m.isCommand = true
          let xp = 'exp' in plugin ? parseInt(plugin.exp) : 17 // pendapatan XP tiap perintah
          if (xp > 200) m.reply('Ngecit -_-') // awokawok
          else m.exp += xp
          if (!isPrems && plugin.limit && global.db.data.users[m.sender].limit < plugin.limit * 1) {
            await this.send2Button(m.chat, `limit kamu habis, cara belinya ketik *${usedPrefix}buy* atau klik tombol dibawah`, wm, 'Beli', '.buy', 'Beli Semua', '.buyall', m)
            continue // limit habis
          }
          let extra = {
            match,
            usedPrefix,
            noPrefix,
            _args,
            args,
            command,
            text,
            conn: this,
            participants,
            groupMetadata,
            user,
            bot,
            isROwner,
            isOwner,
            isAdmin,
            isBotAdmin,
            isPrems,
            chatUpdate,
          }
          try {
            await plugin.call(this, m, extra)
            if (!isPrems) m.limit = m.limit || plugin.limit || false
          } catch (e) {
            // Error occured
            m.error = e
            console.error(e)
            if (e) {
              let text = util.format(e.message ? e.message : e)
              for (let key of Object.values(global.APIKeys))
                text = text.replace(new RegExp(key, 'g'), '#HIDDEN#')
              m.reply(text)
            }
          } finally {
            // m.reply(util.format(_user))
            if (typeof plugin.after === 'function') {
              try {
                await plugin.after.call(this, m, extra)
              } catch (e) {
                console.error(e)
              }
            }
            // if (m.limit) m.reply(+ m.limit + ' Limit terpakai')
          }
          break
        }
      }
    } finally {
      let user, stats = global.db.data.stats
      if (m) {
        if (m.sender && (user = global.db.data.users[m.sender])) {
          user.exp += m.exp
          user.limit -= m.limit * 1
        }

        let stat
        if (m.plugin) {
          let now = + new Date
          if (m.plugin in stats) {
            stat = stats[m.plugin]
            if (!isNumber(stat.total)) stat.total = 1
            if (!isNumber(stat.success)) stat.success = m.error != null ? 0 : 1
            if (!isNumber(stat.last)) stat.last = now
            if (!isNumber(stat.lastSuccess)) stat.lastSuccess = m.error != null ? 0 : now
          } else stat = stats[m.plugin] = {
            total: 1,
            success: m.error != null ? 0 : 1,
            last: now,
            lastSuccess: m.error != null ? 0 : now
          }
          stat.total += 1
          stat.last = now
          if (m.error == null) {
            stat.success += 1
            stat.lastSuccess = now
          }
        }
      }

      try {
        require('./lib/print')(m, this)
      } catch (e) {
        console.log(m, m.quoted, e)
      }
      if (db.data.chats[m.chat].autoread) await this.chatRead(m.chat).catch(_ => _)
    }
  },
  async participantsUpdate({ jid, participants, action }) {
    let chat = global.db.data.chats[jid] || {}
    let text = ''
    switch (action) {
      case 'add':
      case 'remove':
        if (chat.welcome) {
          let groupMetadata = await this.groupMetadata(jid)
          for (let user of participants) {
            // let pp = './src/avatar_contact.png'
            try {
              pp = await uploadImage(await (await fetch(await this.getProfilePicture(user))).buffer())
            } catch (e) {
            } finally {
              text = (action === 'add' ? (chat.sWelcome || this.welcome || conn.welcome || 'Selamat datang, @user!').replace('@subject', this.getName(jid)).replace('@desc', groupMetadata.desc ? String.fromCharCode(8206).repeat(4001) + groupMetadata.desc : '') :
                (chat.sBye || this.bye || conn.bye || 'Sampai jumpa, @user!')).replace(/@user/g, '@' + user.split`@`[0])
              let wel = await (await fetch(fla + `WELCOME`)).buffer()

              let lea = await (await fetch(fla + `GOOD BYE`)).buffer()

              conn.sendButtonLoc(jid, action === 'add' ? wel : lea, text, global.footer, 'LIST MENU', '#menu', false, {
                contextInfo: {
                  mentionedJid: [user]
                }
              })
            }
          }
        }
        break
      case 'promote':
        text = (chat.sPromote || this.spromote || conn.spromote || '@user sekarang admin')
      case 'demote':
        if (!text) text = (chat.sDemote || this.sdemote || conn.sdemote || '@user sekarang bukan admin')
        text = text.replace(/@user/g, '@' + participants[0].split('@')[0])
        if (chat.detect) this.reply(jid, text)
        break
    }
  },
  async delete(m) {
    if (m.key.fromMe) return
    let chat = global.db.data.chats[m.key.remoteJid]
    if (chat.delete) return
    await this.sendButton(m.key.remoteJid, `
terdeteksi @${m.participant.split`@`[0]} menghapus pesan
`.trim(), wm, 'matikan fitur ini', '.0 antidelete', m.message)
    this.copyNForward(m.key.remoteJid, m.message).catch(e => console.log(e, m))
  },
  async onCall(json) {
    if (!db.data.settings[this.user.jid].anticall) return
    let jid = json[2][0][1]['from']
    let isOffer = json[2][0][2][0][0] == 'offer'
    let users = global.db.data.users
    let user = users[jid] || {}
    if (user.whitelist) return
    if (jid && isOffer) {
      const tag = this.generateMessageTag()
      const nodePayload = ['action', 'call', ['call', {
        'from': this.user.jid,
        'to': `${jid.split`@`[0]}@s.whatsapp.net`,
        'id': tag
      }, [['reject', {
        'call-id': json[2][0][2][0][1]['call-id'],
        'call-creator': `${jid.split`@`[0]}@s.whatsapp.net`,
        'count': '0'
      }, null]]]]

      this.sendJSON(nodePayload, tag)
    }
  },
  async GroupUpdate({ jid, desc, descId, descTime, descOwner, announce }) {
    if (!db.data.chats[jid].desc) return
    if (!desc) return
    let caption = `
@${descOwner.split`@`[0]} baru saja mengganti deskripsi grup.

${desc}
        `.trim()
    this.sendButton(jid, caption, wm, 'matikan fitur ini', '.0 desc')

  }
}

global.dfail = (type, m, conn) => {
  let msg = {
    rowner: 'perintah ini hanya bisa digunakan oleh _*Pemilik Bot*_',
    owner: 'perintah ini hanya bisa digunakan oleh _*Owner Bot*_',
    premium: 'perintah ini hanya untuk pengguna _*Premium*_',
    group: 'perintah ini hanya bisa digunakan digrup',
    private: 'perintah ini hanya bisa digunakan dichat pribadi',
    admin: 'perintah ini hanya untuk admin grup',
    botAdmin: 'jadikan bot sebagai admin untuk menggunakan perintah ini',
    unreg: 'daftar untuk menggunakan perintah ini:\n\nformat:\n*.reg nama.umur*\n\ncontoh:\n*.daftar ${conn.getName(m.sender)}.17*',
    game: 'gamenya dimatiin sama ownernya guys',
  }[type]
  if (msg) return m.reply(msg)
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("memperbaharui 'handler.js'"))
  delete require.cache[file]
  if (global.reloadHandler) console.log(global.reloadHandler())
})
