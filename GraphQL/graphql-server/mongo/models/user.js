import mongoose from "mongoose";

const schema = new mongoose.Schema({
    userName: {
        type: String,
        unique: true,
        required: true,
        minlength: 3
    },
    friends: [{
        ref: "Person",
        type: mongoose.Schema.Types.ObjectId
    }]
})

export default mongoose.model("UserLoged", schema)