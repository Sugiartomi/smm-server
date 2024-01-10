// const { User } = require("../models")
const { Request, User, Goods } = require("../models")

class RequestController {
  static async AllRequests(req, res) {
    try {
      let fetchAllGoods = await Request.findAll({
        include: [
          {
            model: User,
            required: true,
          },
          {
            model: Goods,
            required: true,
          },
        ],
      })
      res.status(200).json(fetchAllGoods)
    } catch (error) {
      res.status(400).json(error)
    }
  }
  static async RequestById(req, res) {
    try {
      const { id } = req.params
      let find = await Request.findOne({ where: { id } })
      if (!find) throw { name: "not defined", message: "Request not defined" }
      res.status(200).json(find)
    } catch (error) {
      res.status(400).json(error)
    }
  }

  static async AddRequest(req, res) {
    try {
      console.log("masuuuukkkkk")
      let { userID, goods } = req.body
      for (let i = 0; i < goods.length; i++) {
        console.log(goods)
        const perData = goods[i]
        await Request.create({
          userID,
          goodsID: +perData.barang,
          qty: perData.qty,
          note: perData.note,
          status: "WAITING",
          createdAt: new Date(),
          updatedAt: new Date(),
        })
        await Goods.update(
          { stock: +perData.stock - +perData.qty },
          { where: { id: +perData.barang } }
        )
      }
      res.status(200).json({ message: "request barang success" })
    } catch (error) {
      res.status(400).json(error)
    }
  }

  static async ChangeStatus(req, res) {
    try {
      let { id } = req.params
      console.log(id)
      // let find = Goods.findOne({where : {id}})
      let find = await Request.findByPk(id)
      let newStatus = "WAITING"
      if (find) {
        if (find.status === "WAITING") newStatus = "DONE"
        await Request.update(
          { status: newStatus },
          { where: { id } }
        )
      }
      res.status(200).json({ message : `success, status menjadi ${newStatus}`})
    } catch (error) {
      res.status(400).json(error)
    }
  }
  
  static async DeleteRequest(req,res) {
    try {
      let { id } = req.params
      let find = await Request.findByPk(id)
     if( find) {
      await Request.destroy({ where : {id}})
     }
      res.status(200).json(find)
    } catch (error) {
      res.status(400).json(error)
      
    }
  }
}

module.exports = RequestController
