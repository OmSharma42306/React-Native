import mongoose, { model} from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URL : any  = process.env.MONGODB_URI || undefined;

// connection stuff
export async function connectDB(){
    const response = await mongoose.connect(MONGODB_URL);
    console.log(response);
}

const userSchema = new mongoose.Schema({
   name : {
    type : String,
    required : true,
    trim : true
   },
   email : {
    type : String,
    required : true,
    unique : true
   },
   password : {
    type : String,
    required : true,
   }
});


export const userModel = mongoose.model('userModel',userSchema);

