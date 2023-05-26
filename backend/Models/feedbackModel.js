const {Schema, model, Types} = require('../connection');

const myschema = new Schema({
    user : {type : Types.ObjectId, ref : 'users'},
    feedback : String,
    createdAt: Date
});

module.exports =   model('feedbacks',myschema);