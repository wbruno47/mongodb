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

const personSchema = new Schema({
    first: String,
    last: String
})

personSchema.virtual('fullName').get(function () {
    return `${this.first} ${this.last}`;
})

const Person = mongoose.model('Person', personSchema);

const tammy = new Person({ first: "Tammy", last: "Chow" })
tammy.save();