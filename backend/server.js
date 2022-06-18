const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorMiddleware");
const PORT = process.env.PORT || 8000;

const app = express();

//enable json and urlendocded values on request body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(201).json({ message: "eta gegeg!" });
});

//users route
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(PORT, () => console.log(`server started at ${PORT}`));
