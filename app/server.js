/**
 * importing our modules
 */

import express from "express";
import path from "path";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import passport from "passport";
import { config } from "dotenv";
import socket from "socket.io";

/**
 * import DotEnv nicely
 */

config();
// Dfine our server port
const port = process.env.PORT || 5000;

const app = express();
/**
 * Bodyparser middleware
 */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
/**
 * DB Config
 */
const db = process.env.DB_URL;
// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Mongodb successfully connected"))
  .catch(err => console.log(err));

/**
 * Passport config nicely
 */
// passportConfig(passport)
/**
 * Routes
 */
// app.use('/api/users/', users)
// add post route
// app.use('/api/', posts)
// serve our images
app.use("/api/uploads", express.static("uploads"));
/**
 * serve static assets in production
 */
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("frontend/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

/**
 * Initiallize the server
 */
const server = app.listen(port, () => {
  console.log(`Server up and  running on port ${port} !`);
});

/**
 * setup and config the socketio
 */
const io = socket(server);
io.on("connection", socketCon => {
  console.log("socketIO connection has been started");
});
