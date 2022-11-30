const { createBill, getBills } = require("../controllers/bills.controler")

const router = require("express").Router()




router.route("/").post(createBill).get(getBills)

module.exports = router

