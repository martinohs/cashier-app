import { NextFunction,Request,Response,Router } from "express";
import { UserService } from "../services/user.service";
import { ObjectId } from 'bson';

export const userRouter = Router();

const userService = UserService.getInstance();

userRouter.get('/', async (_: Request, res: Response) => {
    const users = await userService.getUsers();
  
    return res.json({ users });
  });


userRouter.get(
    '/:id',
    async (req: Request, res:Response, next: NextFunction) => {
        try {
            const userId = new ObjectId(req.params.id);
            const user = await userService.getUser(userId);
            res.json(user);
        } catch (error) {
            next(error);
        }
    }
);