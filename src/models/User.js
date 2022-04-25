import { composeWithMongoose } from "graphql-compose-mongoose";
import mongoose, {Schema} from "mongoose";
import mBcrypt from "mongoose-bcrypt";

export const userSchema = new Schema({
    email: {type: String, trim: true, required: true},
    password: {type: String, required: true, bcrypt: true}
}, {timestamps: true, collection: 'users'});

userSchema.plugin(mBcrypt);
userSchema.index({createdAt: 1, updatedAt: 1});

export const User = mongoose.model('User', userSchema);
export const UserTC = composeWithMongoose(User);