import { NextFunction, Request, Response, Router } from "express";
import { BrandService } from "../services/brand.service";
import { Brand } from "../dtos/brand.interface";
import { ObjectId } from "bson";
import { check } from "express-validator";

export const brandRouter = Router();

const brandService = BrandService.getInstance();

brandRouter.get('/',
       async (_:Request, res: Response) => {
           const brands = await brandService.getBrands();

           return res.json({brands});
       }
);

brandRouter.get('/:id',
       async (req: Request, res:Response, next: NextFunction) => {
         try {
             const { id } = req.params;
             const brandId = new ObjectId(id);
             const brand = await brandService.getBrand(brandId);
             res.json({brand});
            
            } catch (error) {
             next(error);
            }   

       }
);

brandRouter.post('/',
       async ( req: Request, res:Response, next: NextFunction) => {
           try {
            const newBrand: Brand = (req.body);
            const brand = await brandService.addBrand(newBrand);

            res.json({brand});
           
            } catch (error) {
               next(error);
           } 
       }
    );

brandRouter.put('/:id',
       async (req: Request, res:Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const brandId = new ObjectId(id);

            const newBrand: Brand = (req.body);
            const brand = await brandService.modifyBrand(newBrand,brandId);

            res.json({brand});
        } catch (error) {
            next(error);
        }
       }
)