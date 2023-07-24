const express = require('express')


const { route } = require('express/lib/application')


const routes = express.Router()


const Detail = require("../models/Detail")







routes.get("/", async (req, res) => {


    const details = await Detail.findOne({ "_id": "64bb9c714e59782240f11914" })
    // console.log(details);



    res.render("index", {

        details: details


    })

})






routes.get('/gallery', async (req, res) => {

;
    const details = await Detail.findOne({ "_id": "64bb9c714e59782240f11914" });




    res.render("gallery", {


        details: details,


    });

}); 







module.exports = routes









