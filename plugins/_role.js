let handler = m => m

handler.before = function (m) {
    let user = global.db.data.users[m.sender]
    let role = (user.level <= 3) ? '*‎تلميذ* 🪤'
      : ((user.level >= 3) && (user.level <= 6)) ? '*‎تلميذ* 🪤'
      : ((user.level >= 6) && (user.level <= 9)) ? '*‎تلميذ* 🪚'
      : ((user.level >= 9) && (user.level <= 12)) ? '*‎تلميذ* 🪚'
      : ((user.level >= 12) && (user.level <= 15)) ? '*‎تلميذ* 🪓'
      : ((user.level >= 15) && (user.level <= 18)) ? '*جينين* ⚒️'
      : ((user.level >= 18) && (user.level <= 21)) ? '*جينين* ⚒️'
      : ((user.level >= 21) && (user.level <= 24)) ? '*‎جينين* 🦾'
      : ((user.level >= 24) && (user.level <= 27)) ? '*‎جينين* 🦾'
      : ((user.level >= 27) && (user.level <= 30)) ? '*‎جينين* 🔮'
      : ((user.level >= 30) && (user.level <= 33)) ? '*شونين* 🏅'
      : ((user.level >= 33) && (user.level <= 36)) ? '*شونين* 🏅'
      : ((user.level >= 36) && (user.level <= 39)) ? '*شونين* 💎'
      : ((user.level >= 39) && (user.level <= 42)) ? '*شونين* 💎'
      : ((user.level >= 42) && (user.level <= 45)) ? '*شونين* 😼'
      : ((user.level >= 45) && (user.level <= 48)) ? '*جونين* 🎩'
      : ((user.level >= 48) && (user.level <= 51)) ? '*جونين* 🎩'
      : ((user.level >= 51) && (user.level <= 54)) ? '*جونين* 🛡️'
      : ((user.level >= 54) && (user.level <= 57)) ? '*جونين* 🛡️'
      : ((user.level >= 57) && (user.level <= 60)) ? '*جونين* 🏆'
      : ((user.level >= 60) && (user.level <= 63)) ? '*السانين* ☄️'
      : ((user.level >= 63) && (user.level <= 66)) ? '*السانين* ☄️'
      : ((user.level >= 66) && (user.level <= 69)) ? '*السانين* ⚜️🔱'
      : ((user.level >= 69) && (user.level <= 71)) ? '*السانين* ⚜️🔱'
      : ((user.level >= 71) && (user.level <= 74)) ? '👑 *السانين* 🏁'
      : ((user.level >= 74) && (user.level <= 77)) ? '👑 *السانين* 🏁'
      : ((user.level >= 77) && (user.level <= 80)) ? '👑 *السانين* 🏁'
      : ((user.level >= 80) && (user.level <= 83)) ? '👑 *السانين* 🏁'
      : ((user.level >= 83) && (user.level <= 86)) ? '👑 *السانين* 🏁'
      : ((user.level >= 86) && (user.level <= 89)) ? '👑 *السانين* 🏁'
      : ((user.level >= 89) && (user.level <= 91)) ? '👑 *السانين* 🏁'
      : ((user.level >= 91) && (user.level <= 94)) ? '👑 *السانين* 🏁'
      : ((user.level >= 94) && (user.level <= 97)) ? '👑 *السانين* 🏁'
      : ((user.level >= 97) && (user.level <= 100)) ? '👑 *∞ هوكاجي* 💎🏁'
      : ((user.level >= 100) && (user.level <= 105)) ? '👑 *∞ هوكاجي* 💎🏁'      
      : ((user.level >= 105) && (user.level <= 120)) ? '👑 *∞ هوكاجي* 💎🏁'
      : ((user.level >= 120) && (user.level <= 150)) ? '👑 *∞ هوكاجي* 💎🏁'
      : ((user.level >= 150) && (user.level <= 160)) ? '👑 *∞ هوكاجي* 💎🏁'
      : ((user.level >= 160) && (user.level <= 170)) ? '👑 *∞ هوكاجي* 💎🏁'
      : ((user.level >= 170) && (user.level <= 185)) ? '👑 *∞ هوكاجي* 💎🏁'
      : ((user.level >= 185) && (user.level <= 200)) ? '👑 *∞ هوكاجي* 💎🏁'
      : ((user.level >= 200) && (user.level <= 400)) ? '👑 *∞ هوكاجي* 💎🏁'
      : ((user.level >= 405) && (user.level <= 700)) ? '👑 *∞ هوكاجي* 💎🏁'
      : ((user.level >= 700) && (user.level <= 1000)) ? '👑 *∞ هوكاجي* 💎🏁'
      : 'نجم الملك التنين'

    user.role = role
    return true
}

export default handler
