// const { User } = require("../models")
const { Request } = require("../models")

class RequestController {
  static async AllRequests(req, res) {
    try {
      let fetchAllGoods = await Request.findAll({})
      res.status(200).json(fetchAllGoods)
    } catch (error) {
      res.status(400).json(error)
    }
  }
  static async RequestById(req, res) {
    try {
      const { id } = req.params
      let find = await Request.findOne({ where: { id } })
      if( !find) throw { name : "not defined", message: "Request not defined"}
      res.status(200).json(find)
    } catch (error) {
      res.status(400).json(error)
    }
  }
}

module.exports = RequestController
