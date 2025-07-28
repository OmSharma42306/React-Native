import express from "express";
import { router as userRouter } from "./api"
import cors from "cors";
import { connectDB } from "./db";

const app = express();
const PORT = 3000;
// middleware stuff
app.use(express.json());
app.use(cors());

// routes
app.use("/user",userRouter)


async function main(){
    await connectDB();
}

main();
app.listen(PORT,()=>{console.log("server started at: ",PORT)})