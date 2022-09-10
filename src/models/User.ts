import mongoose from "mongoose";

const UserInfo = new mongoose.Schema({
    fname: { type: String },
    lname: { type: String },
    email: { type: String },
    phone: { type: Number },
    password: { type: String }
},
{timestamps: true }
);

export default mongoose.model("users", UserInfo);