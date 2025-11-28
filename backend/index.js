const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());
// app.use(cors());
app.use('/images', express.static('upload/images'));

// DB connection
mongoose.connect("mongodb+srv://farhanali4953_db_user:7thSem@cluster0.8rlhlks.mongodb.net/?appName=Cluster0");

// Multer setup
const storage = multer.diskStorage({
  destination: './upload/images',
  filename: (req, file, cb) => cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
});
const upload = multer({ storage });

// Upload route
app.post("/upload", upload.single('product'), (req, res) => {
  res.json({ success: 1, image_url: `/images/${req.file.filename}` });
});

// Routes
app.use("/", require("./routes/authRoutes"));
app.use("/", require("./routes/productRoutes"));

// Root route
app.get("/", (req, res) => res.send("Craftella API Running"));

// Start server
app.listen(port, () => console.log("Server running on port " + port));