const express=require('express');
const app=express();
const multer=require('multer');
const dotenv=require('dotenv');
const cors=require('cors');
const path=require("path");
const cookieParser=require('cookie-parser');
const connectDB = require('./config/db');
const authRoute=require('./routes/auth');
const userRoute=require('./routes/users');
const postRoute=require('./routes/posts');
const commentRoute=require('./routes/comments');
const storage = require('./uploadImage/upload');

dotenv.config();

//database
connectDB();

//middlewares
app.use(express.json());
app.use("/images",express.static(path.join(__dirname,"/images")));
app.use(cors({origin:process.env.ORIGIN,credentials:true}));
app.use(cookieParser());
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/posts",postRoute);
app.use("/api/comments",commentRoute);


const upload=multer({storage:storage})
app.post("/api/upload",upload.single("file"),(req,res)=>{
    // console.log(req.body)
    res.status(200).json("Image has been uploaded successfully!");
})


app.listen(process.env.PORT,()=>{
    console.log("app is running on port "+process.env.PORT);
})