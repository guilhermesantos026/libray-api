import express from "express";
import books from "./booksRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send
        ("Hello World with Node Js"));
    
    app.use(express.json(), books);
};

export default routes;