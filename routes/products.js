const express = require('express')
const { ProductController } = require('../controllers/product.con')

const router = express.Router()


router.post('/create-product', ProductController.create())
router.delete('/delete-product', ProductController.delete())


module.exports = { router } 