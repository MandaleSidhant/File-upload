const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const fileRoute = require('./route/fileRoute');

require('dotenv').config();

const PORT = 4700;
const app = express();

app.set('view engine', 'pug');
app.set('views', './view');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cookieParser());
app.use(cors());

app.use('/uploads', express.static('uploads'));

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URL, {
    useCreateIndex:true,
    useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true
},err => {
    if(err) throw err;
    console.log('mongo db connected');
});


app.use('/',fileRoute);

app.listen(PORT,() => {
    console.log(`server is up and running @ http://localhost:${PORT}`);
});