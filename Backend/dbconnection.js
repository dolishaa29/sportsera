let mongoose=require("mongoose");

require('dotenv').config();

const mongoUri = process.env.MONGO_URI;

mongoose.connect(mongoUri);

const sportsera = mongoose.connection;

sportsera.on('connected', () => {
  console.log("Connected to MongoDB successfully");
});

sportsera.on('error', (error) => {
  console.error("Error connecting to MongoDB:", error.message);
});

sportsera.on('disconnected', () => {
  console.log("Disconnected from MongoDB");
});

module.exports = sportsera;

