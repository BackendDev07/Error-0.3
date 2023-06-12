const express = require("express")
const { CategoryController } = require("../controllers/category.con")

const router = express.Router()


router.post('create-category', CategoryController.create())
router.delete('delete-category', CategoryController.delete())

module.exports = { router }