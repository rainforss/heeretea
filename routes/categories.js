const router = require("express").Router();
let Category = require("../models/category.model");

router.route("/").get((req, res) => {
  Category.find()
    .then((categories) => res.json(categories))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/add").post((req, res) => {
  const id = req.body.id;
  const name = req.body.name;

  const newCategory = new Category({ id, name });

  newCategory
    .save()
    .then(() => res.json("New category added!"))
    .catch((err) => res.status(400).json("Error:" + err));
});

module.exports = router;
