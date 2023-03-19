const Router = require("express");
const router = new Router();
const filesController = require("../controller/files.controller");

router.post("/files-upload", filesController.getFiles);

module.exports = router;
