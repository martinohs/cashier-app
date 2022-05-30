import { NextFunction,Request,Response,Router } from "express";
import { UserService } from "../services/user.service";
import { User } from "../dtos/user.interface";
import { ObjectId } from 'bson';
import { check } from "express-validator";
import { fieldsValidator } from "../middlewares/field-validator.middlewares";
import { USER_ROLES } from "../constants";

export const userRouter = Router();

const userService = UserService.getInstance();

userRouter.get('/', 
    async (_: Request, res: Response) => {
    const users = await userService.getUsers();
  
    return res.json({ users });
  });


userRouter.get('/:id',
    [
        check('id', 'Invalid MongoId').isMongoId(),
        fieldsValidator
    ],
    async (req: Request, res:Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const userId = new ObjectId(id);
            const user = await userService.getUser(userId);

            res.json({user});

        } catch (error) {
            next(error);
        }
    });

userRouter.post('/',
    [
        check('firstName', 'First Name is obligatory').not().isEmpty(),
        check('lastName', 'First Name is obligatory').not().isEmpty(),
        check('password', 'Password is obligatory').not().isEmpty(),
        check('email','Invalid email').isEmail(),
        check('role','Invalid role').isIn(USER_ROLES),
        check('cellphone', ' cellphone is obligatory').not().isEmpty(),
        check('enployeeCode', ' enployeeCode is obligatory').not().isEmpty(),
        check('cellphone', ' cellphone must be a number').isNumeric(),
        check('enployeeCode', ' enployeeCode must be a number').isNumeric(),
        fieldsValidator,
    ],
   async (req:Request, res:Response, next:NextFunction) => {
       try {
           const newUser: User = (req.body)
           const user = await userService.addUser(newUser);

           res.json({user})
       } catch (error) {
           next(error);
       }
       
   });

userRouter.put('/disable/:id',
    [
        check('id', 'Invalid MongoId').isMongoId(),
        fieldsValidator
    ],
    async (req:Request, res:Response, next: NextFunction) => {
        try {
            
            const { id } = req.params;
            const userId = new ObjectId(id);
            const user = await userService.disableUser(userId);

            res.json({user});

        } catch (error) {
            next(error);
        }
        
    });

userRouter.put('/enable/:id',
    [
        check('id', 'Invalid MongoId').isMongoId(),
        fieldsValidator
    ],
    async (req:Request, res:Response, next: NextFunction) => {
        try {
            
            const { id } = req.params;
            const userId = new ObjectId(id);
            const user = await userService.enableUser(userId);

            res.json({user});

        } catch (error) {
            next(error);
        }
        
    });