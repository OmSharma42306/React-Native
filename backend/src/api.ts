import express,{Request,Response} from "express";
import { userModel } from "./db"
export const router = express.Router();
import jwt from "jsonwebtoken"

const jwtSecretKey = process.env.JWT_SECRET_KEY;

router.post('/register',async(req:Request,res:Response)=>{
    const { name,email,password } = req.body;
    try{

        const existingUser = await userModel.findOne({email : email});

        if(existingUser){
            res.status(409).json({msg: "User Already Exists!"});
            return;
        }

        const newUser = await userModel.create({
            name : name,
            email : email,
            password : password
        });
        await newUser.save();
        res.status(200).json({msg : "User Created Successfully",userID : newUser.id,name : newUser.name});
        return;

    }catch(error){
        
        res.status(400).json({msg : error});
        return;
    }

});


router.post('/login',async(req:Request,res:Response)=>{
    const { email,password} = req.body;

    try{
        const existingUser = await userModel.findOne({email : email});
        if(!existingUser){
            res.status(400).json({msg: "User Not Exists!"});
            return;
        };
        
        const token = jwt.sign({userId : existingUser.id},jwtSecretKey as string);
        console.log("Token",token);
        res.status(200).json({token : token,userId:existingUser.id});
        return;

    }catch(error){
        res.status(400).json({msg:error});
    }
    
})