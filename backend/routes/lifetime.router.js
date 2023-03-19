const Router = require("express");
const router = new Router();

function format(ms) {
  function pad(s) {
    return (s < 10 ? "0" : "") + s;
  }
  var hours = Math.floor(ms / (60 * 60));
  var minutes = Math.floor((ms % (60 * 60)) / 60);
  var seconds = Math.floor(ms % 60);

  return pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
}
router.get("/lifetime", (req, res) => {
  res.json({
    uptime: format(process.uptime()),
  });
});

module.exports = router;
