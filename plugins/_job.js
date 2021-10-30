let handler = m => m

handler.before = function (m) {
    let user = global.db.data.users[m.sender]
    let job = (user.level <= 5) ? 'Pengangguran'
        : ((user.level >= 6) && (user.level <= 10)) ? 'Pemulung'
            : ((user.level >= 10) && (user.level <= 20)) ? 'Miner/Penambang'
                : ((user.level >= 20) && (user.level <= 30)) ? 'Penebang Pohon'
                    : ((user.level >= 30) && (user.level <= 40)) ? 'Ojek Pangkalan'
                        : ((user.level >= 40) && (user.level <= 50)) ? 'Driver Online'
                            : ((user.level >= 50) && (user.level <= 60)) ? 'Satpam'
                                : ((user.level >= 60) && (user.level <= 70)) ? 'Polisi'
                                    : ((user.level >= 70) && (user.level <= 80)) ? 'Tentara'
                                        : ((user.level >= 80) && (user.level <= 90)) ? 'Pekerja Kantoran'
                                            : ((user.level >= 90) && (user.level <= 100)) ? 'Prostitusi Online'
                                             : 'Prostitusi Online'
    user.job = job
    return true
}

module.exports = handler