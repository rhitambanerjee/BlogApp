const express=require('express');
const router=express.Router();
const verifyToken = require('../middlewares/verifyToken');
const {createPost,updatePost,deletePost,getPostDetails,getAllPosts,getUserPosts} = require('../controllers/postController');

router.post("/create",verifyToken,createPost);
router.put("/:id",verifyToken,updatePost);
router.delete("/:id",verifyToken,deletePost);
router.get("/:id",getPostDetails);
router.get("/",getAllPosts);
router.get("/user/:userId",getUserPosts);

module.exports=router