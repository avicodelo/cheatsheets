import mongoose from "mongoose";

const MONGODB_URI = "mongodb://localhost:27017/prueba-graphql"

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> {
    console.log("Connected to mongoDB")
})
.catch((error)=>{
    console.error("Error to connecto to MongoDB", error.message)
})