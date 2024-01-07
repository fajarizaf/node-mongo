const mongoose = require("mongoose");
const schema = mongoose.Schema;

const UserSchema = new schema({
    user_credential_id:{
        type:Number,
        required:true
    },
    user_login_email:{
        type:String,
        required:true
    },
    user_password:{
        type:String,
        required:true
    },
    mobile_phone:{
        type:String,
        required:true
    },
    is_verified:{
        type:Number,
        required:true
    },
    is_active:{
        type:Number,
        required:true
    },
    verified_code:{
        type:String,
        required:false
    },
    access_token:{
        type:String,
        required:false
    },
    statusid:{
        type:Number,
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

module.exports = user_credential = mongoose.model("user_credential",UserSchema);