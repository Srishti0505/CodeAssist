const express = require('express');
const app = express();

//importing routers
const userRouter = require('./routers/userRouter');
const codeRouter = require('./routers/codeRouter');
const cors =require('cors');

app.use(cors({
  origin: ['http://localhost:3000']
}));    
    
//parse json data
app.use(express.json());

//adding routers
app.use('/user', userRouter);
app.use('/code', codeRouter);


const port = 5000;

app.get('/' , (req,res) => {
    res.send('Working Perfectly');
});

app.get('/add',(req, res) => {
    res.send('Response from Add');
})
app.get('./getall',(req,res) => {
    res.send('')
})



app.listen(port,() => {console.log('server started!!') } );
