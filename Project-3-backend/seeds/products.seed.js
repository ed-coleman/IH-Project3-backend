// Iteration #1
const mongoose = require("mongoose");
//mongoose.set('strictQuery', false)
const Product = require('../models/Product.model')

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/Project-3-backend";

const productsArr = [{

    "title": "Iphone 11 64GB Black",
    "description": "Released 2019, 20194g, 8.3mm thickness, iOS 13, up to iOS 16.3, 64GB storage",
    "price": 315.99,
    "brand": "Apple",
    "category": "used",
    "image": "https://uk.static.webuy.com/product_images/Phones/Phones%20iPhone/SAPPI1164GBUNLB_l.jpg",
    "addedBy": "64078947a76f5769579d35ed",

}]


mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo!!!!!!!!!!!!!!!!!!!!! Database name: "${x.connections[0].name}"`);
    return Product.create(productsArr)
  })
  .then(data => console.log('list created', data))
  .then(() => mongoose.connection.close())
  .then(()=> console.log(`data base is closed`))
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
