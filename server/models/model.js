const mongoose = require('mongoose')
Schema = mongoose.Schema,
autoIncrement = require('mongoose-auto-increment');
var SchemaTypes = mongoose.Schema.Types;
require('mongoose-double')(mongoose);

var ObjectSchema = mongoose.Schema({
    // please put validations here
    id : {
        type : Number,
        default: 0,
        min: 0
    },
    name:{
        type: String,
        required: [true, "Name of the Product connot be empty!!" ],
        minlength: [3 , "The name of Product should be atleast 3 Charecters!!"]
    },
    qty:{
        type: Number,
        required: [true, "Quantity of the Product connot be empty!!" ],
        min: [0, "The Quantity of Product be min (or) greater than 0!!"]
    },
    price:{
        type: SchemaTypes.Double,
        required: [true, "Price of the Product connot be empty!!" ],
        min: [0 , "The Price of should be min (or) greater than 0!!"]
    }
},{timestamps:true})
mongoose.model('Object', ObjectSchema);
