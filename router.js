const GoodsController = require("./controllers/goods_controller")
const RequestController = require("./controllers/request_controller")
const UserController = require("./controllers/user_controller")

const router = require("express").Router()

router.post("/login", UserController.login)

router.get("/goods/:id", GoodsController.GoodsById)
router.get("/goods", GoodsController.AllGoods)

router.get("/request/:id", RequestController.RequestById)
router.get("/request", RequestController.AllRequests)

module.exports = router
