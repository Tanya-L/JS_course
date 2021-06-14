const User = require("../models/user.model");
const router = require("express").Router();

router.route("/new").post((req, res) => {
  const newUser = new User(req.body);

  newUser
    .save()
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error! " + err));
});

router.route("/").get((req, res) => {
  User.findOne({ _id: req.query.id }).exec((err, user) => {
    if (err) {
      res.status(404).json({ error: "User not found", bad_id: req.query.id });
      return;
    }
    res.json(user);
  });
});

router.route("/").delete((req, res) => {
  User.deleteOne({ _id: req.query.id }).exec((err, _) => {
    if (err) {
      res.status(404).json({
        error: "User not deleted or doesn't exist",
        bad_id: req.query.id,
      });
      return;
    }
    res.json({ deleted_id: req.query.id });
  });
});

router.route("/").put((req, res) => {
  const changes = new User(req.body);

  User.updateOne({ _id: changes._id }, changes, null, (err, _) => {
    if (err) {
      res.status(500).json({
        error: "User not updated or doesn't exist",
        bad_id: req.query.id,
      });
      return;
    }
    res.json({ updated_id: req.query.id });
  });
});

module.exports = router;
