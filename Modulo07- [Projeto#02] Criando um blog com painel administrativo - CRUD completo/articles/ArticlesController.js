const express = require("express");
const router = express.Router();

router.get("/articles", (req, res) => {
  res.send("articles");
});

router.get("/articles/new", (req, res) => {
  res.send("Novo articles");
});


module.exports = router;