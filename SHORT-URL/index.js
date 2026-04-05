const express = require('express');
const connectMogoDB = require('./connect');
const cookieParser = require("cookie-parser");

const cors = require("cors");
const URL = require('./models/url');

const urlRouter = require('./routes/url');
const userRouter = require("./routes/user");
const staticRoute = require('./routes/staticRouter');

const {restrictToLoggedUserOnly} = require("./middleware/auth");

connectMogoDB('mongodb://127.0.0.1:27017/urls')
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log("Didn't connected to the database"));

const app = express();

app.use(cors());
app.use(cookieParser());

app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.use('/url', restrictToLoggedUserOnly, urlRouter);
app.use('/user', userRouter);
app.use('/' ,restrictToLoggedUserOnly ,staticRoute);

app.get('/view/:shortId' , async (req, res) => {
    const shortId = req.params.shortId;
    
    const entry = await URL.findOneAndUpdate(
        {
            shortId
        }, 
        { 
            $push:
            {
                visitHistory :
                {
                    timestamp : Date().toLocaleString()
                } 
            },
        }
    );
    
    res.redirect(entry.redirectURL);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server is listening");
});