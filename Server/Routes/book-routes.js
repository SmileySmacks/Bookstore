const express = require('express')
const router = express.Router()
const Information = require('../Model/Information')
const booksController = require('../Controllers/books-controllers')

//localhost:3001/books/inventory
router.get('/inventory', booksController.getAllBooks)

//localhost:3001/books/add
router.post('/add', booksController.addBook)

//localhost:3001/books/update/:id
router.patch('/update/:id', booksController.updateBook)

//localhost:3001/books/delete/:id
router.delete('/delete/:id', booksController.deleteBook)


module.export = router