const mongoose = require( "mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    fullname: { 
        type: String 
      },
      addr: {   
        type: String 
     }, 
     shippingaddr: {   
        type: String 
     }, 
      accountid: {
        type: Number 
      }, 
      tel :{
        type: Number   
      }, 
      country:{
      type :  String
      }, 
      status : {
          type: Boolean
      }, 
      shoppingcard : {
          type: Array 
       },
       wishlist : {
        type: Array 
     }
},
{
    collection: "users"
});

const User = mongoose.model("users", UserSchema);

module.exports = User;