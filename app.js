const express = require("express");
const app =express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust"; // Correct

main()
.then(() => {
    console.log("connect to DB");
}).catch(err => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);   
};

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.send("hi it's root");
});

app.get("/listings", async (req, res) => {
        const alllistings = await Listing.find({});
        res.render("listings/index.ejs", {alllistings});
    });



// app.get("/testListing", async(req, res) => {
//     let samplelisting = new Listing({
//         title: "Villa La Vida",
//         description: "By the beach",
//         price: 1300,
//         location: "23/B, Pondicheri",
//         country: "India",
//     });
//     await samplelisting.save();
//     console.log("sample was saved");
//     res.send("successful testing");
// });

app.listen(8080, () => {
    console.log("listening");
});