import { model, Schema } from "mongoose";
import { BRAND_MODEL_NAME } from '../constants'
import { Brand } from "../dtos/brand.interface";

const brandSchema = new Schema<Brand> ({

    name:{
        type: String,
        required: true,
        unique: true
    },
    contactPhone:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    }

});

export type BrandDocument = Brand & Document;

export const BrandModel = model(BRAND_MODEL_NAME, brandSchema);