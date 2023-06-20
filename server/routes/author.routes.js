const AuthorController = require('../controllers/author.controllers');

module.exports = app => {
    // ALL AUTHORS
    app.get('/api/authors', AuthorController.findAll);

    // ADD AN AUTHOR FORM
    app.post('/api/authors/add', AuthorController.addAuthor);

    // ONE AUTHOR PAGE
    app.get('/api/authors/:id', AuthorController.findOne);

    // UPDATE AUTHOR
    app.put('/api/authors/:id', AuthorController.updateAuthor);

    // DELETE AUTHOR
    app.delete('/api/authors/:id', AuthorController.deleteAuthor);

}