const express = require('express');
const router = express.Router();
const Product = require('../../models/Product.model');

// // get products page
// router.get('/products', async (req, res) => {
//     res.json('you will see the products here');
// })

// get all products
router.get('/products', async (req, res, next) => {
    try {
    const allProducts = await Product.find()
    res.status(200).json(allProducts)
    console.log(allProducts)
    res.json(error.status)
  } catch (error) {
  }
})

// get one product by id
router.get('/products/:id', async (req, res, next) => {
    try {
        const productId = req.params.id
        console.log(productId);
        const selectedProduct = await Product.findById(productId)
        res.json(selectedProduct)
  } catch (error) {
      console.log(error)
  }
})

// create a new product
router.post('/products', async (req, res, next) => {
    const body = req.body;
    try { 
        const product = await Product.create(body);
        console.log(product);
        res.json(product);
    } catch (error) { 
        console.log(error);
    }
})

// update one product by id
router.put('/products/update/:id', async (req, res, next) => {
    const body = req.body
    console.log(body)
    const selectedProduct = req.params.id
    try {
        const updatedProduct = await Product.findByIdAndUpdate(selectedProduct, body, {new: true});
        res.json(updatedProduct)
    } catch (error) {
        console.error(error)
    }
})

// delete one product by id
router.delete('/products/delete/:id', async (req, res, next) => {
    try {
        const deletedProduct = await Product.findOneAndDelete({ _id: req.params.id });
        res.status(200).json("Product has been deleted")
        // res.status(400).json({ msg: `No product with the following id: ${req.params.id}` })
    } catch (error) {
        console.log(error); 
    }
})

module.exports = router;