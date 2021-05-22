const {Schema, model} = require('mongoose')

const schema = new Schema({
    name: {type: String},
    sex: {type: String},
    birthDay: {type: String}
})

module.exports = schema