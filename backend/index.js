import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from 'path';

const app = express();

app.use(cors());

// Serve static files from the frontend build directory
app.use(express.static(path.join(__dirname, 'frontend/build')));

// Serve index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

const PORT =  7000;
const MONGO =  "mongodb+srv://archit:1234@cluster0.gb71m.mongodb.net/mydatabase";

mongoose.connect(MONGO)
  .then(() => {
    console.log("Database is connected");
  })
  .catch(err => {
    console.error("Database connection error:", err);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
