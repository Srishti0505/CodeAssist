const {Schema, model, Types} = require('../connection');

const myschema = new Schema({
    prompt : String,
    code : String,
    user : {type : Types.ObjectId, ref : 'users'},
    createdAt: Date
});

module.exports =   model('codes',myschema);