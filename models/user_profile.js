const mongoose = require("mongoose");
const schema = mongoose.Schema;

const UserSchema = new schema({
    user_profile_id:{
        type:Number,
        required:true
    },
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    province:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    postal_code:{
        type:Number,
        required:true
    },
    photo:{
        type:String,
        required:true
    },
    created_by:{
        type:Number,
        required:true
    },
    modified_by:{
        type:Number,
        required:true
    },
    created_at:{
        type:Date,
        default:Date.now
    },
    modified_at:{
        type:Date,
        default:Date.now
    }
});

module.exports = user_profile = mongoose.model("user_profile",UserSchema);