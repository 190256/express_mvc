const express = require('express')

//HomeController モジュール読み込み
const homeController = require ('./controllers/HomeController')

const router = express.Router()

//ルーティングの設定
//HomeController
router.get('/', homeController.index)
router.get('/about', homeController.about)
router.get('/items', homeController.items)

module.exports = router