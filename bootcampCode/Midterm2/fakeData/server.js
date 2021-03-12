const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

const casual = require("casual");

const mongoose = require("mongoose");
const { string } = require("casual");

//CONNECTION
const url = `mongodb://localhost:27017/clients`;
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to database"))
  .catch(() => {
    console.log(`Issue connection to database`);
    mongoose.disconnect();
  });

// Blueprints - Schema and Model
const customerSchema = new mongoose.Schema({
  fName: String,
  lName: String,
  phone: String,
});

const CustomerModel = mongoose.model("customers", customerSchema);

// Write a query

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/createPage", (req, res) => {
  res.render("createPage.ejs");
});

app.get("/createData", (req, res) => {
  //   let data = {
  //     fName: casual.first_name,
  //     lName: casual.last_name,
  //     phone: casual.phone,
  //   };

  CustomerModel.create(
    {
      fName: casual.first_name,
      lName: casual.last_name,
      phone: casual.phone,
    },
    (err, customer) => {
      err
        ? console.log(`Error: ${err}`)
        : res.render("results.ejs", { data: customer });
    }
  );
  //   console.log(data);
});

app.get("/readPage", (req, res) => {
  CustomerModel.find({}, (err, customers) => {
    err
      ? console.log(`Error: ${err}`)
      : res.render("readPage.ejs", { data: customers });
  });
  //db.customers.find() - command line prompt for line 63
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
