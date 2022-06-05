import { ObjectId  } from "bson";   
import { Brand } from "../dtos/brand.interface";
import { IdNotFoundException } from "../../user/exceptions/idNotFound.exception";
import { BrandRepository } from "../repository/brand.repository";

export class BrandService {
    private static instance: BrandService
    private brandRepository = BrandRepository.getInstance();

    private constructor() {}

    private ifBrandNotFound = (brand : any, id?:ObjectId) => {
        if (!brand) {
            throw new IdNotFoundException(`Brand with id: ${id} not found`);
        }
    }

    public static getInstance(): BrandService{
        if (!this.instance){
            this.instance = new BrandService();
        }

        return this.instance;
    }

    public getBrands(){
        return this.brandRepository.getBrands();
    }

    public async getBrand( id:ObjectId ){
        const brand = await this.brandRepository.getBrand(id);
        
        this.ifBrandNotFound(brand,id);

        return brand;
    }

    public async modifyBrand(brand: Brand, id: ObjectId){
        const modifiedBrand = await this.brandRepository.modifyBrand(brand,id);

        this.ifBrandNotFound(brand,id);

        return modifiedBrand;
    }

    public async addBrand (brand: Brand){
        const newBrand = await this.brandRepository.addBrand(brand);

        if (!newBrand){
            throw new IdNotFoundException('Error cant create new brand');
        }

        return newBrand;
    }

}