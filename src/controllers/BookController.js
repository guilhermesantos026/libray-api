import bookModel from "../model/Book.js"

class BookController {

    static async findAll (req, res) {
        try {
            const listBooks = await bookModel.find({});
            res.status(200).json(listBooks);    
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Fail on find books` });
        }
    };

    static async create (req, res) {
        try {
            const newBook = await bookModel.create(req.body);
            res.status(201).json({ message: `book created`, book: newBook });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Fail on book creation` });
        }
    };

    static async findById (req, res) {
        try {
            const id = req.params.id;
            const bookDb = await bookModel.findById(id);
            res.status(200).json(bookDb);    
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Fail on find book with id: ${id}` });
        }
    };

    static async update (req, res) {
        try {
            const id = req.params.id;
            await bookModel.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: `book with id: ${id} updated with success`});
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Fail on update book with id: ${id}` });
        }
    };

    static async delete (req, res) {
        try {
            const id = req.params.id;
            await bookModel.findByIdAndDelete(id);
            res.status(204).json({ message: `book with id: ${id} deleted with success`});
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Fail on delete book with id: ${id}` });
        }
    };
};

export default BookController;
