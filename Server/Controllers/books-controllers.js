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