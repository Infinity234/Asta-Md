

let handler = async(m, { conn, text, usedPrefix, command }) => {

  // Sound
  let name = m.pushName || conn.getName(m.sender)
  var vn = "https://i.imgur.com/1lydjZW.mp4"
  let url = "https://github.com/Astropeda/Asta-Md"
  let murl = "https://github.com/Astropeda/Asta-Md"
  let img = "https://leadier-umbrellas.000webhostapp.com/asta-anime1.jpg"
  let con = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
  let doc = {
      audio: {
        url: vn
      },
      mimetype: 'audio/mpeg',
      waveform:  [100, 0, 100, 0, 100, 0, 100],
      fileName: "Asta",
  
      image: {
        url: "https://leadier-umbrellas.000webhostapp.com/asta-anime1.jpg"
      },
      contextInfo: {
        externalAdReply: {
          title: "ᴀꜱᴛᴀ-ᴍᴅ",
          body: "ɪ ᴀᴍ ᴀʟɪᴠᴇ",
          thumbnailUrl: "https://leadier-umbrellas.000webhostapp.com/asta2.jpg",
          thumbnail: null,
          mediaType: 4,
          mediaUrl: "https://leadier-umbrellas.000webhostapp.com/asta2.jpg",
          sourceUrl: "https://chat.whatsapp.com/L1XNePCPC8O6rw9JeQ0iLB"
        }
      }
    };
  
    await conn.sendMessage(m.chat, doc, { quoted: con });
  
  }
  
  handler.help = ['alive']
  handler.tags = ['main']
  handler.command = /^(alive)$/i 

  export default handler;
