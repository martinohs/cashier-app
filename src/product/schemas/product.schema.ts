import mongoose, { model, Schema } from 'mongoose';
import { PRODUCT_MODEL_NAME } from '../constants';
import { Product } from '../dtos/product.interface';

const productSchema = new Schema<Product>({

    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    barCode:{
        type: Number,
        required: false
    },
    brand:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand',
        required: true
    }

});

export type ProductDocument = Product & Document;

export const ProductModel = model(PRODUCT_MODEL_NAME, productSchema);