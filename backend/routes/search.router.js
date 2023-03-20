const Router = require("express");
const router = new Router();
const searchController = require("../controller/search.controller");

router.post("/search", searchController.search);

module.exports = router;
