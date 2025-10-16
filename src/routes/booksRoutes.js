import express from "express";
import BookController from "../controllers/BookController.js";

const routes = express.Router();

routes.get("/books", BookController.findAll);

routes.post("/book", BookController.create);

routes.get("/book/:id", BookController.findById);

routes.put("/book/:id", BookController.update);

routes.delete("/book/:id", BookController.delete);

export default routes;