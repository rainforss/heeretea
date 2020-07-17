const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const router = express.Router();
const path = require("path");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
const transport = {
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: "eheeretea@gmail.com",
    pass: "csy930614",
  },
};

const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("server is ready to take message");
  }
});

router.post("/send", (req, res, next) => {
  var name = req.body.firstName;
  var email = req.body.email;
  var message = req.body.lastName;
  var content = `name:${name} \n email:${email} \n message:${message}`;
  var mail = {
    from: name,
    to: "shengyan@ualberta.ca",
    subject: "New message from contact form",
    text: content,
  };
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });
    }
  });
});

app.use(cors());
app.use(express.json());
app.use("/", router);

const uri =
  "mongodb+srv://csy930614:csy930614@cluster0.yb1dk.mongodb.net/heeretea?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("succesfully opened");
});

const productsRouter = require("./routes/products");
const categoriesRouter = require("./routes/categories");

app.use("/products", productsRouter);
app.use("/categories", categoriesRouter);

//serve static assets if in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

app.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR Backend is good" });
});
