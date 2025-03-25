const fs = require("fs");

const filePath = "C:/Users/soumi/Documents/MY_CODE/APNA_COLLEGE/MAJOR_PROJECT/init/initdata.json";
const fileContent = fs.readFileSync(filePath, "utf8");

console.log("📂 Raw file content:", fileContent);


const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
.then(() => {
    console.log("connect to DB");
}).catch(err => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);   
};

const initDB = async () => {
    await Listing.deleteMany({});
    await Listing.insertMany(initdata.data);
    console.log("data was initialized");
};

// const initDB = async () => {
//     await Listing.deleteMany({});
//     console.log("Before inserting data:", initdata.data); // Debugging

//     if (!Array.isArray(initdata.data) || initdata.data.length === 0) {
//         console.log("initdata.data is empty or not an array!");
//         return;
//     }

//     await Listing.insertMany(initdata.data);
//     console.log("Data inserted successfully!");

//     const allListings = await Listing.find({});
//     console.log("Data in DB after insertion:", allListings);
// };




initDB();

// const mongoose = require("mongoose");
// const initdata = require("./data.js"); // Ensure correct path
// const Listing = require("../models/listing.js"); // Ensure correct path

// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

// async function main() {
//     await mongoose.connect(MONGO_URL);
//     console.log("✅ Connected to DB");
// }

// main().catch(err => console.log("❌ MongoDB Connection Error:", err));

// const initDB = async () => {
//     console.log("📂 Checking initdata object:", initdata);

//     console.log("📂 Checking `initdata`:", initdata); // Debugging
//     console.log("📂 Checking `initdata.data`:", initdata.data); // Debugging

//     if (!Array.isArray(initdata.data) || initdata.data.length === 0) {
//         console.log("🚨 initdata.data is empty or not an array!");
//         return;
//     }

//     await Listing.deleteMany({});
//     console.log("🗑️ Deleted existing listings.");

//     await Listing.insertMany(initdata.data);
//     console.log("✅ Data inserted successfully!");
    
//     const allListings = await Listing.find({});
//     console.log("📜 Data in DB after insertion:", allListings);
// };

// initDB();