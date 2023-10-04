import mongoose from "mongoose"
import uniqueValidator from "mongoose-unique-validator"

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true

    },
    surname1: {
        type: String,
        required: true
    },
    surname2: {
        type: String
    },
    alias: {
        type:String,
        unique: true
    },
    city: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    }
})

schema.plugin(uniqueValidator)

export default mongoose.model("Person", schema)