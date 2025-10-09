import express from "express";

const app = express();
app.use(express.json());

const books = []

function findBookById(id) {
    return books.findIndex(book => {
        return book.id === Number(id)
    });
}

app.get("/", (req, res) => {
    res.status(200).send("Hello get");
});

app.get("/books", (req, res) => {
    res.status(200).json(books);
});

app.get("/books/:id", (req, res) => {
    const index = findBookById(req.params.id);
    res.status(200).json(books[index]);
});

app.post("/books", (req, res) => {
    books.push(req.body);
    res.status(201).send("Book created");
});

app.put("/book/:id", (req, res) => {

    const index = findBookById(req.params.id);

    books[index].title = req.body.title;

    res.status(200).json(books[index]);
});

app.delete("/book/:id", (req, res) => {

    const index = findBookById(req.params.id);

    books.splice(index, 1);

    res.status(204).send();
});

export default app;