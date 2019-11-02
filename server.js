const express = require("express");
const connectDB = require("./config/db");
const app = express();
// connect data base
connectDB();

app.use(express.json());
app.get("/", (req, res) => res.send("API Running"));
//define Routers
app.use("/api/users", require("./routes/api/users"));
app.use("/api/jobbers", require("./routes/api/jobbers"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/avis", require("./routes/api/avis"));
app.use("/api/messages", require("./routes/api/messages"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, err => {
  if (err) console.log(err);
  console.log(`Server is running on ${PORT}`);
});
