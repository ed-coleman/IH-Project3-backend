const { Schema, model, Types } = require("mongoose");
const { User } = require("../models/User.model");


const NewProductSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    brand: {
      type: String,
      enum: ["Apple", "Samsung", "Google", "Microsoft", "Other"],
      required: true,
    },
    category: {
      type: String,
      enum: ["new", "used"],
      required: true,
    },
    image: {
      type: String,
      default: '"/images/iphone.png"'
    },
    addedBy:  {
      type: Schema.Types.ObjectId,
      ref: "User",
    }
    },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const NewProduct = model("NewProduct", NewProductSchema);

module.exports = NewProduct;
