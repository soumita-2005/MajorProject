const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        filename: String,
        url: {
        type: String,
        default: "https://images.pexels.com/photos/2903985/pexels-photo-2903985.jpeg?cs=srgb&dl=pexels-2903985.jpg&fm=jpg",
        set: (v) => v === "" ? "https://images.pexels.com/photos/2903985/pexels-photo-2903985.jpeg?cs=srgb&dl=pexels-2903985.jpg&fm=jpg" : v,}

    },
    place: String,
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;