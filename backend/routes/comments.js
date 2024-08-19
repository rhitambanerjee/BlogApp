const express=require('express');
const router=express.Router();
const verifyToken = require('../middlewares/verifyToken');
const {createComment,updateComment,deleteComment,getAllComments} = require('../controllers/commentController');

router.post("/create",verifyToken,createComment);
router.put("/:id",verifyToken,updateComment);
router.delete("/:id",verifyToken,deleteComment);
router.get("/post/:postId",getAllComments);

module.exports=router