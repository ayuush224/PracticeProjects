// const express = require("express");
// const multer = require("multer");
// const path = require("path");

// const app = express();
// app.use(express.urlencoded({extended : true}));
// app.use(express.json());

// const storage = multer.diskStorage({
//     destination : function(req, file, cb){
//         return cb(null, "./uploads");
//     },
//     filename : function(req, file, cb){
//         return cb(null, `${Date.now().toLocaleString()}-${file.originalname}`);
//     }
// });

// const upload = multer({storage : storage});

// app.get("/", (req, res) => {
//     return res.sendFile(path.resolve("./home.html"));
// });

// app.post("/upload", upload.single("profileImage"), (req, res) => {
//     console.log(req.body);
//     console.log(req.file);
//     return res.send("Uploaded");
// });

// app.listen(3001, () => {
//     console.log("Server is listening");
// });

const multer = require("multer");
const express = require("express");
const path = require("path");

const app = express();

app.use(express.urlencoded({extended : true}));
app.use(express.json());

const storage = multer.diskStorage({
    destination : function(req, file, cb){
        return cb(null, "./uploads");
    },
    filename : function(req, file, cb){
        return cb(null, `${Date.now().toLocaleString()}-${file.originalname}`);
    }
});

const fileFilter = function(req, file, cb){
    const AllowedMimeTypes = ["image/png", "image/jpeg"];
    const AllowedExtName = [".png" , ".jpeg", ".jpg"];

    const fileExt = path.extname(file.originalname).toLowerCase();

    if(AllowedExtName.includes(fileExt) && AllowedMimeTypes.includes(file.mimetype)){
        cb(null, true);
    }
    else{
        cb(new Error("File extension name does not matches"), false);
    }
};

const upload = multer({
    storage : storage,
    limits : {
        fileSize : 2 * 1024 * 1024, // No more than 2MB is allowed to upload
        files : 5, // Maximum 5 files are uploaded
    },
    fileFilter : fileFilter,
});

/**
 This will now fail if the user sends 6 files, 
 even if each file is only 1KB.
 app.post('/upload', upload.array('photos', 10), (req, res) => { ... });
 A Quick Warning on upload.array
 In the example above, upload.array('photos', 10) has a second argument (10).
 
 The Multer Instance Limit (files: 5) acts as a hard ceiling.
 
 The Route Limit (10) is what the route expects.
 
 If your instance says files: 5 but your route says upload.array('photos', 10), the request will fail as soon as the 6th file starts uploading, because the instance-level security is stricter.
 **/
 
app.get("/", (req, res) => {
    return res.sendFile(path.resolve("./home.html"));
});

app.post("/upload", upload.single("profileImage"), (req, res) => {
    console.log(req.file);
    return res.send("File succesfully Uploaded");
})

app.listen(3000, () => {
    console.log("Server is listening");
})