const mongoose = require('mongoose');
const { Schema } = mongoose;


mongoose.connect('mongodb://127.0.0.1:27017/shopApp',
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connection open!!");
    })
    .catch(err => {
        console.log("ERROR: " + err);
    })


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true,
        min: [0, "Price must be positive!!"]
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: {
        type: [String]
    },
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    }
})


const Product = mongoose.model('Product', productSchema);

const bike = new Product({
    name: "Tire Pump",
    price: 19.5,
    categories: ['cycling', 'Accesory']
})

/* bike.save()
    .then(data => {
        console.log("WORKED");
        console.log(data);
    })
    .catch(err => {
        console.log("ERR: " + err);
    }) */

