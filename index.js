const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("prod"))

const router = new express.Router();

router.get("/api/health", (req, res) => {
  res.sendStatus(200);
});

router.get("/api/hello-world", (req, res, next) => {
  res.send("hello world - 2");
});

router.all("/", (req, res) => {
  res.sendStatus(404);
})

app.use((err, req, res, next) => {
  res.sendStatus(500);
});

app.use(router);

app.listen(3200, () => {
  console.log("App listens onf 3200 port");
});
