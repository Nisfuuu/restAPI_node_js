require("dotenv").config();
const PORT = process.env.PORT || 5000;
const express = require("express");

const userRoutes = require("./routes/users");
const middlewareLogRequst = require("./middleware/log");

const app = express();

app.use(middlewareLogRequst);
app.use(express.json());

app.use("/users", userRoutes);

app.use("/", (req, res) => {});

app.listen(PORT, () => {
  console.log(`server berhasil di run di port ${PORT}`);
});
