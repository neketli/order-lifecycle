const execute = require("@getvim/execute");

const getFiles = async (req, res) => {
  try {
    let files = req.files.files?.length ? req.files.files : [req.files.files];

    files.forEach((file) => {
      if (!file.name.match(".*.(xlsx)")) {
        res?.status(415).send("Invalid file type!");
        return;
      }
      // file.mv(`./data/_${file.name.split("_")[1]}`);
      file.mv(`./modules/parser/data/_${file.name.split("_")[1]}`);
    });
    res?.sendStatus(200);
  } catch (error) {
    console.error(error);
    res?.status(500).send(error);
    return;
  }
};

module.exports = {
  getFiles,
};
