const express = require('express');
const router = express.Router();
const productController = require('../controllers/v1/productController')
const userController = require('../controllers/v1/userController')
const productTransferController = require('../controllers/v1/productTransferController')
const authController = require('../controllers/authController')
const authMiddleware = require('../middlewares/authMiddleware')

router.post("/api/login",authController.login)

router.route("/api/product/:id?")
    .get(authMiddleware.checkToken,productController.getProduct)
    .post(authMiddleware.checkToken,productController.createProduct)
    .patch(authMiddleware.checkToken,productController.updateProduct)
    .delete(authMiddleware.checkToken,productController.deleteProduct)

router.route("/api/user/:id?")
    .get(authMiddleware.checkToken,userController.getUser)
    .post(authMiddleware.checkToken,userController.createUser)
    .patch(authMiddleware.checkToken,userController.updateUser)
    .delete(authMiddleware.checkToken,userController.deleteUser)

router.route("/api/product-transfer/:productId?")
    .get(authMiddleware.checkToken,productTransferController.getProductTransfer)
    .post(authMiddleware.checkToken,productTransferController.createProductTransfer)

module.exports = router;
