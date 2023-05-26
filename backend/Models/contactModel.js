const {Schema, model, Types} = require('../connection');

const myschema = new Schema({
    user : {type : Types.ObjectId, ref : 'users'},
    name : String,
    email : String,
    message : String,
    createdAt: Date
});

module.exports =   model('contacts',myschema);