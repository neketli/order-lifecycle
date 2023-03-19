const { PythonShell } = require("python-shell");
const path = require("path");

const search = async (req, res) => {
  try {
    console.log("Start search");
    let { start_date, end_date, value, type } = req.body;

    const options = {
      mode: "text",
      pythonOptions: ["-u"],
      scriptPath: path.join(__dirname, "/modules/parser"),
      args: [
        "--start_date",
        start_date,
        "--end_date",
        end_date,
        `--${type}`,
        value,
      ],
    };
    const data = await PythonShell.run("xlsx_parser.py", options);

    const response = JSON.parse(data[0].replaceAll("'", '"'));

    console.log("End search");

    res?.send(response);
  } catch (error) {
    console.error(error);
    res?.status(500).send(error);
    return;
  }
};

module.exports = {
  search,
};
