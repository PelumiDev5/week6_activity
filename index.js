const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const customHelpers = require('./views/helpers/customHelpers');

// app.engine(file_extension, engine_use(directory))
app.engine(
  ".hbs",
  exphbs.engine({
    extname: ".hbs",
    defaultLayout: "main",
    layoutsDir: __dirname + "/views/layouts/",
    partialsDir: __dirname + "/views/partials/",
    helpers: customHelpers
  })
);

app.set("view engine", ".hbs");

/*app.get("/", (req, res)=>{
  res.send("home page for handlebars")
})*/

app.get("/", (req, res) => {
    // find the home.hbs file, and fill in the information
    res.render("home", {
      title: "Home Page",
      message: "Welcome to Handlebars with Express!",
    });
  });

    // Sample data
const sampleData = {
    user: { name: "Pelumi Owoshagba", email: "pelumi@example.com" },
    users: [
      { name: "Alice", email: "alice@example.com" },
      { name: "Bob", email: "bob@example.com" },
    ],
    condition: false,
  }; 


  // if
app.get("/if", (req, res) => {
    res.render("if", { user: sampleData.user });
});
  
  // unless
app.get("/unless", (req, res) => {
    res.render("unless", { condition: sampleData.condition });
});
  
  // each
app.get("/each", (req, res) => {
    res.render("each", { users: sampleData.users });
});

  app.get("/chExample", (req, res) => {
    const sampleDataCH = {
      name: 'Pelumi ',
      birthday: '1990-10-10',
      message: 'Hello, Custom Helpers!'
    };
    res.render("chExample", sampleDataCH);
  });
  
  

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`); 
});
 