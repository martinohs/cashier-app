import { model, Schema } from 'mongoose';
import { USER_MODEL_NAME } from '../constants';
import { User } from '../dtos/user.interface';

const userSchema = new Schema<User>({

    firstName: {
        type: String, 
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    cellphone: {
        type: Number,
        required: true,
        unique: true
    }, 
    role:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    enployeeCode:{
        type: Number,
        required: true,
        unique: true
    }


});

export type UserDocument = User & Document;

export const UserModel = model(USER_MODEL_NAME, userSchema);