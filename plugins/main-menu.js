import {
    promises,
    readFileSync
   } from "fs"
   import {
    join
   } from "path"
   import {
    xpRange
   } from "../lib/levelling.js"
   import moment from "moment-timezone"
   import os from "os"

  
   let groupmenu = `
   『 *ɢʀᴏᴜᴘ ᴍᴇɴᴜ* 』
  ⬡│▸ .getbio
  ⬡│▸ .animequote
  ⬡│▸ .Setdesc 
  ⬡│▸ .setname
  ⬡│▸ .add
  ⬡│▸ .delete
  ⬡│▸ .delwarn
  ⬡│▸ .demote
  ⬡│▸ .infogp
  ⬡│▸ .hidetag
  ⬡│▸ .invite
  ⬡│▸ .kick
  ⬡│▸ .link
  ⬡│▸ .poll question|option|option
  ⬡│▸ .profile
  ⬡│▸ .promote
  ⬡│▸ .resetlink
  ⬡│▸ .setbye
  ⬡│▸ .group *open/close*
  ⬡│▸ .setwelcome
  ⬡│▸ .simulate
  ⬡│▸ .staff
  ⬡│▸ .tagall
  ⬡│▸ .totag
  ⬡│▸ .warn
  ⬡│▸ .warns
  ⬡│▸ .main
  ╰──────────➛`
  
  let ownermenu = `
  『 *ᴏᴡɴᴇʀ ᴍᴇɴᴜ* 』
  ⬡│▸ .addprem <>
  ⬡│▸ .addowner @user
  ⬡│▸ .allow <>
  ⬡│▸ .HEROKU
  ⬡│▸ .ban @user
  ⬡│▸ .banchat
  ⬡│▸ .tx
  ⬡│▸ .broadcastgroup 
  ⬡│▸ .bcgc 
  ⬡│▸ .cleartmp
  ⬡│▸ .delexpired
  ⬡│▸ .delprem @user
  ⬡│▸ .removeowner @user
  ⬡│▸ .setppbotfull
  ⬡│▸ .getplugin <name file>
  ⬡│▸ .getfile <name file>
  ⬡│▸ .join <chat.whatsapp.com> <dias>
  ⬡│▸ .reset <54xxx>
  ⬡│▸ .resetprefix
  ⬡│▸ .restart
  ⬡│▸ ..setprefix
  ⬡│▸ ..setprefix [symbol]
  ⬡│▸ .unban @user
  ⬡│▸ .unbanchat
  ⬡│▸ .update
  ⬡│▸ .config
  ⬡│▸ .listban
  ⬡│▸ .deleteplugin <name>
  ╰──────────➛`
  
  let funmenu = `
  『 *ꜰᴜɴ ᴍᴇɴᴜ* 』
  ⬡│▸ .afk
  ⬡│▸ .tomp3
  ⬡│▸ .toav
  ⬡│▸ .bot
  ⬡│▸ .character
  ⬡│▸ .dare
  ⬡│▸ .flirt
  ⬡│▸ .pickupline
  ⬡│▸ .question
  ⬡│▸ .shayari
  ⬡│▸ .ship
  ⬡│▸ .yomamajoke
  ⬡│▸ .truth
  ⬡│▸ .waste
  ⬡│▸ .image
  ⬡│▸ .meme
  ⬡│▸ .quote
  ╰──────────➛`
  
  let reactmenu = `
  『 *ʀᴇᴀᴄᴛɪᴏɴ ᴍᴇɴᴜ* 』
  ⬡│▸ .bully 
  ⬡│▸ .cuddle 
  ⬡│▸ .cry 
  ⬡│▸ .hug 
  ⬡│▸ .awoo 
  ⬡│▸ .kiss 
  ⬡│▸ .lick 
  ⬡│▸ .pat 
  ⬡│▸ .smug 
  ⬡│▸ .bonk 
  ⬡│▸ .yeet 
  ⬡│▸ .blush 
  ⬡│▸ .smile 
  ⬡│▸ .wave 
  ⬡│▸ .highfive 
  ⬡│▸ .handhold 
  ⬡│▸ .nom 
  ⬡│▸ .bite 
  ⬡│▸ .glomp 
  ⬡│▸ .slap 
  ⬡│▸ .kill 
  ⬡│▸ .happy 
  ⬡│▸ .wink 
  ⬡│▸ .poke 
  ⬡│▸ .dance 
  ⬡│▸ .cringe 
  ╰──────────➛`
  
  let dlmenu = `
  『 *ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ* 』
  ⬡│▸ .facebook 
  ⬡│▸ .gdrive
  ⬡│▸ .gitclone 
  ⬡│▸ .igstalk
  ⬡│▸ .instagram
  ⬡│▸ .mediafire 
  ⬡│▸ .mega
  ⬡│▸ .modapk
  ⬡│▸ .play 
  ⬡│▸ .play2 
  ⬡│▸ .playvid 
  ⬡│▸ .spotify
  ⬡│▸ .tiktok 
  ⬡│▸ .tiktokstalk
  ⬡│▸ .twitter 
  ⬡│▸ .ytmp3 
  ⬡│▸ .ytsearch
  ⬡│▸ .ytmp4
  ⬡│▸ .wallpaper
  ╰──────────➛`
  
  let gamemenu = `
  『 *ɢᴀᴍᴇ ᴍᴇɴᴜ* 』
  ⬡│▸ .slot <amount>
  ⬡│▸ .chess [from to]
  ⬡│▸ .chess delete
  ⬡│▸ .chess join
  ⬡│▸ .chess start
  ⬡│▸ .delttt
  ⬡│▸ .guessflag
  ⬡│▸ .Maths <modes>
  ⬡│▸ .ppt <rock/paper/scissors>
  ⬡│▸ .tictactoe <tag number>
  ╰──────────➛`
  let logomenu = `
  『 *ᴀʀᴛ ᴍᴇɴᴜ* 』
  ⬡│▸ .blur
  ⬡│▸ .difuminar2
  ⬡│▸ .hornycard
  ⬡│▸ .hornylicense
  ⬡│▸ .gfx1
  ⬡│▸ .gfx2
  ⬡│▸ .gfx3
  ⬡│▸ .gfx4
  ⬡│▸ .gfx5
  ⬡│▸ .gfx6
  ⬡│▸ .gfx7
  ⬡│▸ .gfx8
  ⬡│▸ .gfx9
  ⬡│▸ .gfx10
  ⬡│▸ .gfx11
  ⬡│▸ .gfx12
  ⬡│▸ .simpcard
  ⬡│▸ .itssostupid
  ⬡│▸ .iss
  ⬡│▸ .stupid
  ⬡│▸ .tweet
  ⬡│▸ .lolicon
  ⬡│▸ .ytcomment
  ╰──────────➛`
  
  let stickermenu = `
  『 *ꜱᴛɪᴄᴋᴇʀ ᴍᴇɴᴜ* 』
  ⬡│▸ .emojimix
  ⬡│▸ .getsticker
  ⬡│▸ .smaker
  ⬡│▸ .stickerwithmeme
  ⬡│▸ .swmeme 
  ⬡│▸ .swm
  ⬡│▸ .sfull
  ⬡│▸ .toimg 
  ⬡│▸ .tovid
  ⬡│▸ .trigger 
  ⬡│▸ .ttp
  ⬡│▸ .ttp2
  ⬡│▸ .ttp3
  ⬡│▸ .ttp4
  ⬡│▸ .ttp5
  ⬡│▸ .attp
  ⬡│▸ .attp2
  ⬡│▸ .attp3
  ⬡│▸ .take
  ╰──────────➛`
  
  let audiomenu = `
  『 *ᴀᴜᴅɪᴏ ᴍᴇɴᴜ* 』
  ⬡│▸ .bass
  ⬡│▸ .blown
  ⬡│▸ .deep
  ⬡│▸ .earrape
  ⬡│▸ .fast
  ⬡│▸ .fat
  ⬡│▸ .nightcore
  ⬡│▸ .reverse
  ⬡│▸ .robot
  ⬡│▸ .slow
  ⬡│▸ .smooth
  ⬡│▸ .tupai
  ╰──────────➛`
  
  
  let newsmenu = `
  『 *ɴᴇᴡꜱ ᴍᴇɴᴜ* 』
  ⬡│▸ .news
  ⬡│▸ .technews
  ⬡│▸ .ndtv
  ╰──────────➛
  `
  let economy = `
  『 *ᴇᴄᴏɴᴏᴍʏ ᴍᴇɴᴜ* 』
  ⬡│▸ .addgold 
  ⬡│▸ .addxp 
  ⬡│▸ .bank
  ⬡│▸ .buych
  ⬡│▸ .cock-fight
  ⬡│▸ .buy
  ⬡│▸ .buyall
  ⬡│▸ .daily
  ⬡│▸ .deposit
  ⬡│▸ .gamble
  ⬡│▸ .give credit
  ⬡│▸ .levelup
  ⬡│▸ .rank
  ⬡│▸ .rob
  ⬡│▸ .roulette
  ⬡│▸ .wallet
  ⬡│▸ .withdraw
  ⬡│▸ .work
  ╰──────────➛`
  let animemenu = `
  『 *ᴀɴɪᴍᴇ ᴍᴇɴᴜ* 』
  ⬡│▸ .anime
  ⬡│▸ .akira
  ⬡│▸ .akiyama
  ⬡│▸ .anna
  ⬡│▸ .asuna
  ⬡│▸ .ayuzawa
  ⬡│▸ .boruto
  ⬡│▸ .chiho
  ⬡│▸ .chitoge
  ⬡│▸ .deidara
  ⬡│▸ .erza
  ⬡│▸ .elaina
  ⬡│▸ .eba
  ⬡│▸ .emilia
  ⬡│▸ .hestia
  ⬡│▸ .hinata
  ⬡│▸ .inori
  ⬡│▸ .isuzu
  ⬡│▸ .itachi
  ⬡│▸ .itori
  ⬡│▸ .kaga
  ⬡│▸ .kagura
  ⬡│▸ .kaori
  ⬡│▸ .keneki
  ⬡│▸ .kotori
  ⬡│▸ .kurumi
  ⬡│▸ .madara
  ⬡│▸ .mikasa
  ⬡│▸ .miku
  ⬡│▸ .minato
  ⬡│▸ .naruto
  ⬡│▸ .nezuko
  ⬡│▸ .sagiri
  ⬡│▸ .sasuke
  ⬡│▸ .sakura
  ⬡│▸ .manhwa
  ⬡│▸ .waifu
  ⬡│▸ .neko
  ⬡│▸ .zerotwo
  ⬡│▸ .loli
  ⬡│▸ .pokedex <pokemon>
  ⬡│▸ .trace
  ╰──────────➛
  `
  let toolsmenu = `
  『 *ᴛᴏᴏʟ ᴍᴇɴᴜ* 』
  ⬡│▸ .nowa
  ⬡│▸ .qr 
  ⬡│▸ .qrcode 
  ⬡│▸ .style  
  ⬡│▸ .weather
  ⬡│▸ .dehaze
  ⬡│▸ .recolor
  ⬡│▸ .hdr
  ⬡│▸ .length <amount>
  ⬡│▸ .tinyurl <link>
  ⬡│▸ .shorten <link>
  ⬡│▸ .tempmail
  ⬡│▸ .shazam
  ⬡│▸ .cal <equation>
  ⬡│▸ .carbon <code>
  ⬡│▸ .define <word>
  ⬡│▸ .element
  ⬡│▸ .google
  ⬡│▸ .itunes
  ⬡│▸ .lyrics
  ⬡│▸ .imdb
  ⬡│▸ .course
  ⬡│▸ .randomcourse
  ⬡│▸ .readmore
  ⬡│▸ .readvo
  ⬡│▸ .removebg
  ⬡│▸ .ss 
  ⬡│▸ .ssf 
  ⬡│▸ .subreddit
  ⬡│▸ .telesticker 
  ⬡│▸ .tourl
  ⬡│▸ .translate <lang> 
  ⬡│▸ .true
  ⬡│▸ .tts <lang> <task>
  ⬡│▸ .wa
  ⬡│▸ .wikipedia
  ╰──────────➛`
  
  let Aimenu = `
  『 *ᴀɪ ᴍᴇɴᴜ* 』
  ⬡│▸ .bing
  ⬡│▸ .dalle
  ⬡│▸ .chatgpt
  ⬡│▸ .toanime
  ⬡│▸ .gitagpt
  ⬡│▸ .tocartoon
  ⬡│▸ .ai
  ⬡│▸ .bard
  ⬡│▸ .alexa
  ⬡│▸ .bingimg
  ⬡│▸ .gemini
  ╰──────────➛
  `
  let botmenu = `
  『 *ʙᴏᴛ ᴍᴇɴᴜ* 』
  ⬡│▸ .ping
  ⬡│▸ .runtime
  ⬡│▸ .script
  ⬡│▸ .server
  ⬡│▸ .blocklist
  ⬡│▸ .alive
  ⬡│▸ .info
  ⬡│▸ .owner
  ⬡│▸ .totalfeature
  ⬡│▸ .list
  ⬡│▸ .messi
  ⬡│▸ .cristianoronaldo
  ⬡│▸ .cr7
  ⬡│▸ .ppcouple
  ⬡│▸ .ppcp
  ⬡│▸ .pinterest
  ⬡│▸ .reg
  ⬡│▸ .mysn
  ⬡│▸ .unreg 
  ╰──────────➛
  `
  let pluginmenu = `
  『 *ᴘʟᴜɢɪɴꜱ ᴍᴇɴᴜ* 』
  ⬡│▸ .plugins
  ⬡│▸ .install
  ╰──────────➛
  `

  const handler = async (m, {
    conn,
    command,
    text,
    args,
    usedPrefix
  }) => {
    
  
   let glb = global.db.data.users
   let usrs = glb[m.sender]
   let tag = `@${m.sender.split("@")[0]}`
   let mode = global.opts["self"] ? "Private" : "Public"
   
   let {
  age,
  exp,
  limit,
  level,
  role,
  registered,
  credit
   } = glb[m.sender]
   let {
  min,
  xp,
  max
   } = xpRange(level, global.multiplier)
   let name = await conn.getName(m.sender)
   let premium = glb[m.sender].premiumTime
   let prems = `${premium > 0 ? "Premium": "Free"}`
   let platform = os.platform()
  
  
   let ucpn = `${ucapan()}`
  
   let _uptime = process.uptime() * 1000
   let _muptime
   if (process.send) {
  process.send("uptime")
  _muptime = await new Promise(resolve => {
  process.once("message", resolve)
  setTimeout(resolve, 1000)
  }) * 1000
   }
   let muptime = clockString(_muptime)
   let uptime = clockString(_uptime)
  
   
   let totalfeatures = Object.values(global.plugins).filter((v) => v.help && v.tags).length;
   let totalreg = Object.keys(glb).length
  
    conn.gurumenu = conn.gurumenu ? conn.gurumenu : {};
    
   
    global.fcontact = { key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: 'status@broadcast' }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    const infoText = `
    ${botname} あ⁩ 」\n
    Hii ${name} User
    
    *${ucpn}* 
   
    ✧───『  *ᴄᴜʀʀᴇɴᴛ ᴜꜱᴇʀ* 』───✧
    |❃| *ɴᴀᴍᴇ:* ${name}
    |❃| *ɢ-ɴᴀᴍᴇ:* ᴀꜱᴛᴀ ᴍᴅ
    |❃| *ᴘʟᴀᴛꜰᴏʀᴍ:* ʟɪɴᴜx
    ╰──────────➛
   
    ✧───『 *ʙᴏᴛ ɪɴꜰᴏ* 』───✧
    |❃| *ʙᴏᴛ ɴᴀᴍᴇ:* ${botname}
    |❃| *ᴍᴏᴅᴇ:* ${mode}
    |❃| *ᴘʟᴀᴛꜰᴏʀᴍ:* ${platform}
    |❃| *ᴛʏᴘᴇ:* ɴᴏᴅᴇᴊꜱ
    |❃| *ʙᴀɪʟᴇʏꜱ:* ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ
    |❃| *ᴘʀᴇꜰɪx:* [ *${usedPrefix}* ]
    |❃| *ᴜᴘᴛɪᴍᴇ:* ${muptime}
    |❃| *ᴅᴀᴛᴀʙᴀꜱᴇ:*  ${totalreg}
    ╰──────────➛
    
    ✧───『 *ᴄᴍᴅ* 』───✧ 
    │ *${totalfeatures}* ᴘʟᴜɢɪɴꜱ

    ╰──────────➛
     ${readMore}

    ✧───『  *ɴᴏᴛɪᴄᴇ*  』───✧ 
  │*ʀᴇᴘʟʏ ᴡɪᴛʜ ɴᴜᴍʙᴇʀ*
  ╰───────➛
  ╭───────➛
  │ *1.* ʙᴏᴛ ᴍᴇɴᴜ
  │ *2.* ᴏᴡɴᴇʀ ᴍᴇɴᴜ
  │ *3.* ɢʀᴏᴜᴘ ᴍᴇɴᴜ
  │ *4.* ꜰᴜɴ ᴍᴇɴᴜ
  │ *5.* ʀᴇᴀᴄᴛɪᴏɴ ᴍᴇɴᴜ
  │ *6.* ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ᴍᴇɴᴜ
  │ *7.* ɢᴀᴍᴇ ᴍᴇɴᴜ
  │ *8.* ʟᴏɢᴏ ᴍᴇɴᴜ
  │ *9.* ꜱᴛɪᴄᴋᴇʀ ᴍᴇɴᴜ
  │ *10.* ᴀᴜᴅɪᴏ ᴍᴇɴᴜ
  │ *11.* ɴᴇᴡꜱ ᴍᴇɴᴜ
  │ *12.* ᴇᴄᴏɴᴏᴍʏ ᴍᴇɴᴜ
  │ *13.* ᴀɴɪᴍᴇ ᴍᴇɴᴜ
  │ *15.* ᴛᴏᴏʟꜱ ᴍᴇɴᴜ
  │ *16.* ᴀɪ ᴍᴇɴᴜ
  │ *18.* ᴘʟᴜɢɪɴ ᴍᴇɴᴜ
  ╰───────➛
 ${readMore}` 
;

  
  const { result, key, timeout } = await conn.sendMessage(m.chat, { video: { url: menuvid }, caption: infoText.trim(),  gifPlayback: true,
  gifAttribution: 0}, { quoted: fcontact })
  
  // Save the menu options to gurumenu
  conn.gurumenu[m.sender] = {
    result,
    key,
    timeout: setTimeout(() => {
      conn.sendMessage(m.chat, {
          delete: key
      });
      delete conn.gurumenu[m.sender];
  }, 150 * 1000),
  };
  };
  
 
  handler.before = async (m, { conn }) => {
    conn.gurumenu = conn.gurumenu ? conn.gurumenu : {};
    if (m.isBaileys || !(m.sender in conn.gurumenu)) return;
    const { result, key, timeout } = conn.gurumenu[m.sender];
    if (!m.quoted || m.quoted.id !== key.id || !m.text) return;
    const choice = m.text.trim();
    
    if (choice === "1") {
        await conn.sendMessage(m.chat, { image: { url: 'https://leadier-umbrellas.000webhostapp.com/asta-anime1.jpg' },
        caption: botmenu
      }, { quoted:fcontact });
      } else if (choice === "2") {
        await conn.sendMessage(m.chat, { image: { url: 'https://leadier-umbrellas.000webhostapp.com/asta-anime2.jpg' },
        caption: ownermenu
      }, { quoted:fcontact });
      } else if (choice === "3") {
        await conn.sendMessage(m.chat, { image: { url: 'https://leadier-umbrellas.000webhostapp.com/asta-anime3.jpg' },
        caption: groupmenu
      }, { quoted:fcontact });
      } else if (choice === "4") {
        await conn.sendMessage(m.chat, { image: { url: 'https://i.imgur.com/Yv8MBql.jpeg' },
        caption: funmenu
      }, { quoted:fcontact });
      } else if (choice === "5") {
        await conn.sendMessage(m.chat, { image: { url: 'https://i.imgur.com/Yv8MBql.jpeg' },
        caption: reactmenu
      }, { quoted:fcontact });
      } else if (choice === "6") {
        await conn.sendMessage(m.chat, { image: { url: 'https://i.imgur.com/Yv8MBql.jpeg' },
        caption: dlmenu
      }, { quoted:fcontact });
      } else if (choice === "7") {
        await conn.sendMessage(m.chat, { image: { url: 'https://i.imgur.com/Yv8MBql.jpeg' },
        caption: groupmenu
      }, { quoted:fcontact });
      } else if (choice === "8") {
        await conn.sendMessage(m.chat, { image: { url: 'https://i.imgur.com/Yv8MBql.jpeg' },
        caption: logomenu
      }, { quoted:fcontact });
      } else if (choice === "9") {
        await conn.sendMessage(m.chat, { image: { url: 'https://i.imgur.com/Yv8MBql.jpeg' },
        caption: stickermenu
      }, { quoted:fcontact });
      } else if (choice === "10") {
        await conn.sendMessage(m.chat, { image: { url: 'https://i.imgur.com/Yv8MBql.jpeg' },
        caption: audiomenu
      }, { quoted:fcontact });
      } else if (choice === "11") {
        await conn.sendMessage(m.chat, { image: { url: 'https://i.imgur.com/Yv8MBql.jpeg' },
        caption: newsmenu
      }, { quoted:fcontact });
      } else if (choice === "12") {
        await conn.sendMessage(m.chat, { image: { url: 'https://i.imgur.com/Yv8MBql.jpeg' },
        caption: economy
      }, { quoted:fcontact });
      } else if (choice === "13") {
        await conn.sendMessage(m.chat, { image: { url: 'https://i.imgur.com/Yv8MBql.jpeg' },
        caption: animemenu
      }, { quoted:fcontact });
      } else if (choice === "14") {
        await conn.sendMessage(m.chat, { image: { url: 'https://i.imgur.com/Yv8MBql.jpeg' },
        caption: nsfwmenu
      }, { quoted:fcontact });
      } else if (choice === "15") {
        await conn.sendMessage(m.chat, { image: { url: 'https://i.imgur.com/Yv8MBql.jpeg' },
        caption: toolsmenu
      }, { quoted:fcontact });
      } else if (choice === "16") {
        await conn.sendMessage(m.chat, { image: { url: 'https://i.imgur.com/Yv8MBql.jpeg' },
        caption: Aimenu
      }, { quoted:fcontact });
      } else if (choice === "17") {
        await conn.sendMessage(m.chat, { image: { url: 'https://i.imgur.com/Yv8MBql.jpeg' },
        caption: religionmenu
      }, { quoted:fcontact });
      } else if (choice === "18") {
        await conn.sendMessage(m.chat, { image: { url: 'https://i.imgur.com/Yv8MBql.jpeg' },
        caption: pluginmenu
      }, { quoted:fcontact });
      } else {
        m.reply('Invalid choice. Please reply with a valid number.');
      }
  
  };
  
  
  handler.help = ["play"];
  handler.tags = ["downloader"];
  handler.command = /^(menu)$/i;
  handler.limit = true;
  export default handler;
  
  
  
  
  function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
   }
   
   const more = String.fromCharCode(8206)
   const readMore = more.repeat(4001)
   
   function clockString(ms) {
    let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60
    return [h, " H ", m, " M ", s, " S "].map(v => v.toString().padStart(2, 0)).join("")
   }
   
   function clockStringP(ms) {
    let ye = isNaN(ms) ? "--" : Math.floor(ms / 31104000000) % 10
    let mo = isNaN(ms) ? "--" : Math.floor(ms / 2592000000) % 12
    let d = isNaN(ms) ? "--" : Math.floor(ms / 86400000) % 30
    let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000) % 24
    let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60
    return [ye, " *ʏᴇᴀʀꜱ*\n", mo, " *ᴍᴏɴᴛʜ*\n", d, " *ᴅᴀʏꜱ*\n", h, " *ʜᴏᴜʀꜱ*\n", m, " *ᴍɪɴꜱ*\n", s, " *ꜱᴇᴄᴏɴᴅꜱ*"].map(v => v.toString().padStart(2, 0)).join("")
   }
   
   function ucapan() {
    const time = moment.tz("Asia/Kolkata").format("HH")
    let res = "Good morning ☀️"
    if (time >= 4) {
     res = "Good Morning 🌄"
    }
    if (time >= 10) {
     res = "Good Afternoon ☀️"
    }
    if (time >= 15) {
     res = "Good Afternoon 🌇"
    }
    if (time >= 18) {
     res = "Good Night 🌙"
    }
    return res
   }
  
