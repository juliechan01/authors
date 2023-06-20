const Author = require('../models/author.model');

module.exports = {
    // ALL AUTHORS - READ ALL
    findAll: (req, res) => {
        Author.find({})
            .then((allAuthors) => res.json(allAuthors))
            .catch((err) => console.log(err));
    },

    // ADD AN AUTHOR - CREATE
    addAuthor: (req, res) => {
        const { name } = req.body;
        Author.create({
            name: name
        })
            .then(newAuthor => {
                res.status(201).json({ author: newAuthor })
            })
            .catch((err) => {
                res.status(400).json(err);
            })
    },

    // READ AN AUTHOR
    findOne: (req, res) => {
        Author.findOne({ _id: req.params.id })
            .then(authors => res.json(authors))
            .catch(err => res.json(err));
    },

    // UPDATE AN AUTHOR
    updateAuthor: (req, res) => {
        Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updatedAuthor => res.status(200).json(updatedAuthor))
        .catch(err => {
            res.status(400).json(err);
        })
    },

    // DELETE AN AUTHOR
    deleteAuthor: (req, res) => {
        Author.deleteOne({ _id:req.params.id })
            .then(deleteConfirmation => res.json(deleteConfirmation))
            .catch(err => res.json(err))
    }
}