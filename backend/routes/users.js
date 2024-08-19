const express=require('express');
const router=express.Router();
const {updateUser,deleteUser,getUserById} = require('../controllers/userController');
const verifyToken = require('../middlewares/verifyToken');

router.put("/:id",verifyToken,updateUser);
router.delete("/:id",verifyToken,deleteUser)
router.get("/:id",getUserById)

module.exports=router