// const { User } = require("../models")
const { Goods } = require("../models")

class GoodsController {
  static async AllGoods(req, res) {
    try {
      let fetchAllGoods = await Goods.findAll({})
      res.status(200).json(fetchAllGoods)
    } catch (error) {
      res.status(400).json(error)
    }
  }
  static async GoodsById(req, res) {
    try {
      const { id } = req.params
      let find = await Goods.findOne({ where: { id } })
      if( !find) throw { name : "not defined", message: "Goods not defined"}
      res.status(200).json(find)
    } catch (error) {
      res.status(400).json(error)
    }
  }
}

module.exports = GoodsController
