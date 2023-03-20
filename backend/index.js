const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
require("dotenv").config();

const lifetimeRouter = require("./routes/lifetime.router");
const filesRouter = require("./routes/files.router");
const searchRouter = require("./routes/search.router");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.json());
app.use(
  cors({
    credentials: true,
    exposedHeaders: ["Content-Disposition"],
  })
);
app.use(fileUpload({}));

// Routes
app.use("/api/", lifetimeRouter);
app.use("/api/", filesRouter);
app.use("/api/", searchRouter);

app.use("", (req, res) => {
  res.sendStatus(404);
});

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`server started on port: ${PORT}`));
