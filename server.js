const express = require('express');
const app = express();
const dotenv = require("dotenv").config(); 
const mongoose = require("mongoose");


const initApp = async () => {
    return new Promise ((resolve, reject) => {
        const db = mongoose.connection;
        db.on("error", (error)=> console.error(error));
        db.once("open", ()=> console.log("Connected to Database"));

        mongoose.connect(process.env.DB_CONNECTION).then(() => {
            const bodyParser = require("body-parser");
            app.use(bodyParser.json());
            app.use(bodyParser.urlencoded({ extended: true }));


            const postRoutes = require("./routes/posts_routes");
            app.use("/posts", postRoutes);

            const commentRoutes = require("./routes/comments_routes");
            app.use("/comments", commentRoutes);

            app.get("/about", (req, res) => {
                res.send("About page");
            });
            resolve(app);

        });
 });
   
};

module.exports = initApp;