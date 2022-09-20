1.) Create folder structure. Create folders titled "Client" for frontend, and "Server" for backend.

2.) Create folder structure for "Server" folder:
    - Inside of "Server" folder, create:
        - "Controller"
        - "Model"
        - Routes

3.) Create json.
    - cd Server
    - npm init -y

4.) Install backend dependencies:
    - npm install mongoose cors express nodemon

5.) Modify backend package.json for nodemon index.js

6.) Create node server:
    - Create index.js
    
7.) Configure database component:
    - Set up Atlas, create cluster, create database. titled as Bookstore, create collection titled Information.

8.) Creage mongoose model for schema
    - Create a file titled information.js in model folder

9.) Create controllers file titled "books-controllers.js" in controllers folder.
Content for books-controllers.js:


            const Information = require("../Model/Information")

            const getAllBooks = async(req, res, next) => {
                const full_list = await Information.find({})
                try {
                    res.status(200).json({
                        status: "Success",
                        data: {
                            full_list
                        }
                    })
                }
                catch(err){
                    res.status(500).json({
                        status: "Failed",
                        message: err
                    })
                }
            }

            const addBook = async(req, res, next) => {
                const info_to_be_added = new Information(req.body)
                try {
                    await info_to_be_added.save()
                    res.status(201).json({
                        status: "Success",
                        data: {
                            info_to_be_added
                        }
                    })
                } 
                catch(err){
                    res.status(500).json({
                        status: "Failed",
                        message: err
                    })
                }
            }

            const deleteBook = async(req, res, next) => {
                await Information.findByIdAndDelete(req.params.id)
                try {
                    res.status(204).json({
                        status: "Success",
                        data: {}
                    })
                }
                catch(err){
                    res.status(500).json({
                        status: "Failed",
                        message: err
                    })
                }
            }

            const updateBook = async(req, res, next) => {
                const update_entry = await Information.findByIdAndUpdate(req.params.id, req.body, {
                    new: true,
                    runValidators: true
                })
                try {
                    res.status(200).json({
                        status: "Success",
                        data: {
                            update_entry
                        }
                    })
                }
                catch(err){
                    console.log(err)
                }
                
            }

            exports.getAllBooks = getAllBooks
            exports.addBook = addBook
            exports.deleteBook = deleteBook
            exports.updateBook = updateBook


10.) Create route file insie routes folder titled "book-routes.js"
Content for book-routes.js:

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


11.)

