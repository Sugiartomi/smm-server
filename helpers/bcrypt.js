const bcrypt = require('bcryptjs')

const hashPass = pass => bcrypt.hashSync(pass, 10)
const comparePass = (pass, hashedPass) => bcrypt.compareSync(pass, hashedPass)

module.exports = { hashPass, comparePass }