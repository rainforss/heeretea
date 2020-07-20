const router = require("express").Router();
let Product = require("../models/product.model");

router.route("/").get((req, res) => {
  Product.find()
    .then((products) => res.json(products))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/add").post((req, res) => {
  const id = req.body.id;
  const productName = req.body.productName;
  const category = req.body.category;
  const price = req.body.price;
  const isHot = req.body.isHot;
  const iceChangeable = req.body.iceChangeable;
  const sugarChangeable = req.body.sugarChangeable;
  const iceRemovable = req.body.iceRemovable;
  const canHot = req.body.canHot;

  const newProduct = new Product({
    id,
    productName,
    category,
    price,
    isHot,
    iceChangeable,
    sugarChangeable,
    iceRemovable,
    canHot,
  });

  newProduct
    .save()
    .then(() => res.json("New product added!"))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/:id").get((req, res) => {
  Product.findById(req.params.id)
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/:id").delete((req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then(() => res.json("Product has been deleted."))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/update/:id").post((req, res) => {
  Product.findById(req.params.id).then((product) => {
    product.id = req.body.id;
    product.productName = req.body.productName;
    product.category = req.body.category;
    product.price = req.body.price;
    product.isHot = req.body.isHot;
    product.iceChangeable = req.body.iceChangeable;
    product.sugarChangeable = req.body.sugarChangeable;
    product.iceRemovable = req.body.iceRemovable;
    product.canHot = req.body.canHot;

    product
      .save()
      .then(() => res.json("Product has been updated."))
      .catch((err) => res.status(400).json("Error:" + err));
  });
});

module.exports = router;
