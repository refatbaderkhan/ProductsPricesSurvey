const express = require("express");
const router = express.Router();
const productController = require('../controllers/product.controller');

router.get('/product-groups', productController.getProductGroups);
router.post('/product-groups', productController.createProductGroup);

router.get('/product-group-varieties/:productGroupId', productController.getProductGroupVarieties);
router.post('/product-group-varieties', productController.createProductGroupVariety);

router.get('/origins', productController.getOrigins);
router.post('/origins', productController.createOrigin);

router.get('/purchase-uoms', productController.getPurchaseUoMs);
router.post('/purchase-uoms', productController.createPurchaseUoM);

router.get('/sizes', productController.getSizes);
router.post('/sizes', productController.createSize);

router.get('/products', productController.getProducts);
router.post('/products', productController.createProduct);

module.exports = router;