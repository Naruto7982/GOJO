import fetch from 'node-fetch';
const handler = async (m, {conn, text}) => {
  try {
    const res = await fetch('https://api.thecatapi.com/v1/images/search');
    const img = await res.json();
    const caption = `
_©jon snow - Bot_
`.trim();
    conn.sendFile(m.chat, img[0].url, 'cat.jpg', caption, m);
  } catch (e) {
    console.log(e);
    throw '*Error!*';
  }
};
handler.help = ['cat'];
handler.tags = ['random'];
handler.command = /^قط|قطة|قطه|بسة|بسه$/i;
handler.limit = 1;
handler.fail = null;
export default handler;
