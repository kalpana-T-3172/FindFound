// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// require('dotenv').config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB Connected'))
//   .catch(err => console.log(err));

// app.listen(5000, () => console.log('Server running on port 5000'));






// const express = require('express');
// const cors = require('cors');
// const authRoutes = require('./routes/auth'); // Import auth routes

// const app = express();

// app.use(express.json()); // Middleware to parse JSON
// app.use(cors()); // Enable CORS

// // Use authentication routes
// app.use('/api/auth', authRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// server.js








import express from "express";
 import cors from "cors";
 import dotenv from "dotenv";
import connectDb from "./Dd/Db.js";
import routes from "./routes/routes.js"
 dotenv.config();
 
 const app = express();
 //const bookingRoutes = require('./routes/bookingRoutes');
 const PORT = process.env.PORT || 5000;
 
 // Connect to MongoDB
 connectDb();
 
 // Middleware
 app.use(express.json());
 app.use(cors());
 
 // Routes
 app.use("/api/auth",routes);

 
 app.listen(PORT, () => {
     console.log(`🚀 Server running on http://localhost:${PORT}`);
 });
