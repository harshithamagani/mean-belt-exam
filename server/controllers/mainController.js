const mongoose = require('mongoose')
const Object = mongoose.model('Object')
module.exports = {
    findAll:(req, res) => {
        Object.find()
            .then(data => res.json({success:"successfully found something", data:data}))
            .catch(error => res.json({errorMsg:"You got fooled", data:error}));
    },
    create:(req, res) => {
        Object.create(req.body)
            .then(data => {
                data.id += 1
                res.json(data)
            })
            .catch(error => 
                res.json(error))
    },
    findOne:(req, res) => {
        Object.findOne({_id:req.params.id})
            .then(data => res.json(data))
            .catch(error => res.json(error))
    },
    edit:(req, res) => {
        Object.findByIdAndUpdate({_id:req.params.id}, req.body, {new:true,runValidators: true })
            .then(data => res.json(data))
            .catch(error => res.json(error))
    },
    delete:(req, res) => {
        Object.findByIdAndDelete({_id:req.params.id})
            .then(data => res.json(data))
            .catch(error => res.json(error))
    },

}