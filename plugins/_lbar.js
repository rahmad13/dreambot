let handler = m => m

handler.before = function (m) {
    let user = global.db.data.users[m.sender]
    let lbars = (user.level <= 5) ? '[â–’â–’â–’â–’â–’â–’â–’â–’â–’â–’â–’]'
        : ((user.level >= 6) && (user.level <= 10)) ? '[â–ˆâ–’â–’â–’â–’â–’â–’â–’â–’â–’â–’]'
            : ((user.level >= 10) && (user.level <= 20)) ? '[â–ˆâ–ˆâ–’â–’â–’â–’â–’â–’â–’â–’â–’]'
                : ((user.level >= 20) && (user.level <= 30)) ? '[â–ˆâ–ˆâ–ˆâ–’â–’â–’â–’â–’â–’â–â–’]'
                    : ((user.level >= 30) && (user.level <= 40)) ? '[â–ˆâ–ˆâ–ˆâ–ˆâ–’â–’â–’â–’â–’â–â–’]'
                        : ((user.level >= 40) && (user.level <= 50)) ? '[â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–’â–’â–’â–’â–’â–’]'
                            : ((user.level >= 50) && (user.level <= 60)) ? '[â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–’â–’â–’â–’â–’]'
                                : ((user.level >= 60) && (user.level <= 70)) ? '[â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–’â–’â–’]'
                                    : ((user.level >= 70) && (user.level <= 80)) ? '[â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–’â–’]'
                                        : ((user.level >= 80) && (user.level <= 90)) ? '[â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–’]'
                                            : ((user.level >= 90) && (user.level <= 100)) ? '[â–ˆâ–ˆâ–’â–’â–’â–’â–’â–ˆâ–ˆâ–ˆâ–ˆ]'
                                             : '[â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆ]'
    user.lbars = lbars
    return true
}

module.exports = handler