let handler = async (m, { conn, command, text }) => {
	
    if (!text) return conn.reply(m.chat, '*[❗خطأ❗] منشن احد @ او اكتب لقب او اسم شخص تبي يطلع لك تحليل شخصيته حقه 🐤✅*', m)
	
  let personalidad = `
▣──────────────────
│
*▣─❧  الاسم* : ${text}
│
*الأخلاق الحميدة* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
│
  *الأخلاق السيئة* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
 │
 *نوع الشخص* : ${pickRandom(['طيب القلب','متكبر','بخيل','كريم','متواضع','خجول','جبان','فضولي','محبوب','كريم', 'ذكي'])}
 │
 *دائما* : ${pickRandom(['متوتر','سيء','مشتت','مزعج','نمام','نشبة','دلخ',' يتابع انمي','فاتح واتس','يكذب','خروف',' فاضي طول وقته على الجوال'])}
 │
 *الذكاء* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
 │
 *الحنكة* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
│
 *الشجاعة* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
 │
  *الخوف* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
 │
 *شهرة* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
│
▣──────────────────
`
conn.reply(m.chat, personalidad, m, { mentions: conn.parseMention(personalidad) })
}
handler.help = ['personalidad *<nombre>*']
handler.tags = ['fun']
handler.command = /^شخصية|الشخصيه|الشخصية|شخصيه/i

export default handler 

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
                             }