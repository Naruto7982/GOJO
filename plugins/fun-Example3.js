let handler = m => m;

handler.all = async function(m) {
  if (/^فلم$/i.test(m.text)) {
    conn.reply(m.chat, `*🎥【 ${pickRandom(global.Movie)} 】🎥*
${gt}`, m);
  }
};

handler.help = ['Movie'];
handler.tags = ['fun'];
handler.command = /^فلم$/i; 
export default handler;

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

global.Movie = [
 'كيليان',
'توماس شيلبي',
'اوبنهايمر',
'باربي',
'تي باغ',
'بين ليونس',
'سول غودمان',
'والتر وايت',
'غاس فرينق',
'راغنر',
'البروفيسور',
'توني',
'شارلوك',
'جون سنو',
'امير كوزجو',
'فارتولو',
'علي حيدر',
'ياماش',
'تونسيل',
'مايكل',
'جوكر',
'لوكا',
'جوفري',
'كوبر',
'مورف',
'سميث',
'تومي',
'الكسندر',
'راشيل',
'هارفي',
'عادل الامام',
'حسن حسني',
'آل باتشينو',
'كريستان بيل',
'توم كروز',
'روبرت',
'مورغان',
'سميث',
'باتريك',
'ريك',
'هايزنبيرغ',
'جيسي بينكمان',
'جونيور',
'توكا',
'ارثر',
'الفي',
'فينيوم',
'جون ويك ',
'جون شيلبي',
'جوني',
'شاروخان',
'سلمان خان',
'كارينا',
'كاترين',
'مارلين',
'راج',
'لوسيفر',
'آنا',
'هاري بوتر',
'علاوي حبيب قلبي',
'وينزداي',
'سيفن',
'ايرون',
'فرانك',
'سام',
'دايفيد',
'جيمس',
'ماري',
'تشارلي',
'توم',
'بوب',
'لوسي',
'ستيف',
'بيلي',
'بوبي',
'مارك',
'ريتشل',
'جيم',
'ريتشارد',
'ايميلي',
'ماريا',
'داني',
'نوفا',
'جونو',
'انتوني',
'علاءالدين',
'باتمان',
'سوبرمان',
'ايرونمان',
'سبايدرمان',
'اريا ستارك',
'نيد ستارك',
'ريغار تارغاريان',
'ايموند',
'أليسنت',
'ايغون',
'رينيرا',
'فيسيرس',
'ديمون تارغاريان',
'ايغون الغازي',
'ارثر دين',
'جيمي لانستر',
'تيريون لانستر',
'جوفري',
'ذا هاوند',
'سيرسي',
'روبرت براثيون',
'سانسا ستارك',
'ساليمي',
'ميرف',
'كاتلين',
'لورد بيليش',
'ثيون',
'أليسنت',
'ستانيس براثيون',
'كريغار ستارك',
'دينيرس تارغاريان',
'دراكارس',
'توماس شيلبي',
'بيرون',
'ايفار',
'اوتريد',
'ليانا ستارك',
'ريان'
]
