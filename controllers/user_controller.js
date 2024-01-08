// const { User } = require("../models")
const { User } = require("../models")
const { hashPass, comparePass } = require("../helpers/bcrypt")

class UserController {
  static async login(req, res) {
    try {
      let { nama, password } = req.body
      if (!nama || !password)
        throw {
          name: "invalid input login",
          message: "username or password are required!",
        }
      let userLogin = await User.findOne({ where: { nama } })
      if (!userLogin)
        throw {
          name: "invalid input login",
          message: "Please input usename or password correctly",
        }

      let comp = comparePass(password, userLogin.password)
      if (!comp)
        throw {
          name: "invalid input login",
          message: "Please input usename or password correctly",
        }

      res.status(200).json(userLogin)
    } catch (error) {
      res.status(400).json(error)
    }
  }
}

module.exports = UserController
