import { ObjectId } from "bson";
import { Brand } from "../dtos/brand.interface";
import { BrandModel } from "../schemas/brand.schema";


export class BrandRepository {

    private static instance: BrandRepository;
    
    private constructor() {};

    public static getInstance(): BrandRepository {
        if (!this.instance){
            this.instance = new BrandRepository;
        }

        return this.instance;
    }
    
    public getBrands(){
        console.log('Searching all brands');
        return BrandModel.find({});
    }

    public getBrand(id: ObjectId){
        console.log(`Searching a brand with id ${id}`);
        return BrandModel.findById(id);
    }

    public addBrand(brand: Brand){
        console.log('Creating new brand');
        return BrandModel.create(brand);
    }

    public async modifyBrand(brand: Brand,id?: ObjectId){
        console.log(`Modify brand with name ${brand.name}`);
        return BrandModel.findByIdAndUpdate(id,brand,{
            returnOriginal: false
          });
    }

}