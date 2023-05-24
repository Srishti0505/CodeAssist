const {Schema, model, Types} = require('../connection');

const myschema = new Schema({
    title : String,
    file : String,
    user : {type : Types.ObjectId, ref : 'users'},
    createdAt: Date
});

module.exports =   model('codes',myschema);