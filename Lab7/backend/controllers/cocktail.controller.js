const { cocktails } = require("../data");
const router = require("express").Router();

function findCocktail(id) {
  return cocktails.find((c) => c.idDrink === id);
}

router.route("/").get((req, res) => {
  if (req.query.id) {
    const findResult = findCocktail(req.query.id);
    if (findResult) {
      res.json(findResult);
    } else {
      res
        .status(404)
        .json({ error: "Cocktail not found", bad_id: req.query.id });
    }
  } else {
    res.json({ drinks: cocktails });
  }
});

module.exports = router;
