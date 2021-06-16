const Cocktail = require("../models/cocktail.model");
const router = require("express").Router();

router.route("/new").post((req, res) => {
  const newCocktail = new Cocktail(req.body);

  newCocktail
    .save()
    .then((cocktail) => res.json(cocktail))
    .catch((err) => res.status(400).json("Error! " + err));
});

router.route("/").get((req, res) => {
  Cocktail.findOne({ _id: req.query.id }).exec((err, cocktail) => {
    if (err) {
      res
        .status(404)
        .json({ error: "Cocktail not found", bad_id: req.query.id });
      return;
    }
    res.json(cocktail);
  });
});

router.route("/").delete((req, res) => {
  Cocktail.deleteOne({ _id: req.query.id }).exec((err, _) => {
    if (err) {
      res.status(404).json({
        error: "Cocktail not deleted or doesn't exist",
        bad_id: req.query.id,
      });
      return;
    }
    res.json({ deleted_id: req.query.id });
  });
});

router.route("/").put((req, res) => {
  const changes = new Cocktail(req.body);

  Cocktail.updateOne({ _id: changes._id }, changes, null, (err, _) => {
    if (err) {
      res.status(500).json({
        error: "Cocktail not updated or doesn't exist",
        bad_id: req.query.id,
      });
      return;
    }
    res.json({ updated_id: req.query.id });
  });
});

module.exports = router;
