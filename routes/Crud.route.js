import { Router } from "express";
import { getUser, postUser } from "../controller/user.js";
const router = Router();

// sample user routes
router.get ("/user", getUser )
router.post ('/post', postUser)

// router.post('/post', (req,res)=>{
//     // console.log('the products has been read');
// })

router.patch('/update', (req,res)=>{
      res.json({ message: "Welcome to the API" });
    // console.log('the products has been updated');
})

router.delete('/delete', (req,res)=>{
    console.log('the products is deleted');
})


export default router;