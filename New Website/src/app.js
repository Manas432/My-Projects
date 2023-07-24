const express = require("express");








const app = express();
const hbs = require("hbs");
const routes = require('./routes/main');


const mongoose = require("mongoose");

const Detail = require('./models/Detail.js');





app.use('', routes); // Place this before the static file middleware
app.use(express.static("public"));
app.use('/static', express.static("public"));





//Db connection

mongoose.connect("mongodb+srv://Manas32:28JMxroHBRSya77f@cluster0.uve8zmr.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});






// Check if the database connection is successful
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to the database!');
});











// const newDetailData = {
//   brandName: "Example Brand",
//   brandIconurl: "https://example.com/icon.png",
//   links: [
//     {
//       label: "Home",
//       url: "/",
//     },

//     {
//       label: "Services",
//       url: "/services",
//     },

//     {
//       label: "Gallery",
//       url: "/gallery"

//     },
//     {
//       label: "About",
//       url: "/about"

//     },
//     {
//       label: "Contact us ",
//       url: "contact"

//     },


//   ],
// };





// const newDetail = new Detail(newDetailData);

// newDetail.save()
//   .then(savedDetail => {
//     console.log("Detail saved successfully:", savedDetail);
//   })
//   .catch(err => {
//     console.error("Error saving detail:", err);
//   });





















// (Template engine)
app.set('view engine', 'hbs');
app.set("views", "views");
hbs.registerPartials("views/partials");

const port = process.env.PORT || 5556;
app.listen(port, () => {
  console.log("Server started on port " + port);
});




























