const express = require('express');
const userRouter = require('./routes/user');
const {connectMongoDb} = require('./connection');
const {logReqRes} = require('./middlewares');

// mongoose.connect('mongodb://127.0.0.1:27017/youtube-app')
// .then(() => console.log("Mongo DB Connected"))
// .catch((err) => console.log("Error in DB Connection", err));

try{
    connectMongoDb('mongodb://127.0.0.1:27017/youtube-app');
}
catch(err){
    console.log("Mongo Db Not connected successfully");
};

const app = express();
app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.use(logReqRes('log.txt'));

app.use('/users', userRouter);

app.listen(8000, () => {
    console.log("Server is listening");
});