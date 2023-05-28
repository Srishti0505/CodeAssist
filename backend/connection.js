const mongoose = require('mongoose');

const url = 'mongodb+srv://ssrishti726:6388422352@cluster0.xjrocys.mongodb.net/mydatabase?retryWrites=true&w=majority';

mongoose
  .connect(url)
  .then((result) => {
    //console.log(result);
    console.log('database connected');
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = mongoose;