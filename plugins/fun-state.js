let handler  = async (m, { conn }) => {
  let user = m.sender;
conn.reply(m.chat,`╭━━━*الطلب دولتي*━━━⬣
(@${user.split('@')[0]})┃
┃${pickRandom(global.state)} 
╰━━━━━━⬣
${gt}`, m)
}
handler.help = ['country']
handler.tags = ['fun']
handler.command = /^دولتي/i
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.state = [ 
       '*🌌 دولتك 🌌 ❈↲ هي 🇹🇳*',  
          '*🌌 دولتك 🌌 ❈↲ هي  🇧🇩*',  
              '*🌌 دولتك 🌌 ❈↲ هي  🇾🇪*',  
       '*🌌 دولتك 🌌 ❈↲ هي  🇹🇷*',  
       '*🌌 دولتك 🌌 ❈↲ هي  🇬🇧*' ,
       '*🌌 دولتك 🌌 ❈↲ هي  🇺🇸*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇪🇭*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇸🇩*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇸🇾*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇰🇷*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇧🇷*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇶🇦*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇸🇦*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇵🇰*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇮🇳*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇯🇵*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇱🇧*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇸🇴*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇦🇷*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🏴‍☠️*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇵🇹*',
        '*🌌 دولتك 🌌 ❈↲ هي  🏳️‍⚧️*', 
       ' *🌌 دولتك 🌌 ❈↲ هي  🇦🇺*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇲🇽*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇯🇵*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇱🇾*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇳🇱*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇸🇾*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇪🇸*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇫🇷*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇨🇮*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇳🇫*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇧🇪*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇵🇭*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🏴‍☠️*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇦🇪*',  
       ' *🌌 دولتك 🌌 ❈↲ هي  🇵🇸*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇱🇾*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇧🇻*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇲🇦*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇭🇷*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇴🇲*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇩🇪*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇧🇭*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇩🇿*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇮🇶*',
       ' *🌌 دولتك 🌌 ❈↲ هي  🇰🇼*', 
       ' *🌌 دولتك 🌌 ❈↲ هي  🇸🇦*'
  ]