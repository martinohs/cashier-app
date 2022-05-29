import { ObjectId } from "bson";
import { UserDocument, UserModel } from "../schemas/user.schema";



export class UserRepository {

    private static instance: UserRepository;
    // private userModel : Model<UserDocument> = UserModel; //? NO FUNCIONA ?? 

    private constructor() {}

    public static getInstance(): UserRepository {
            if (!this.instance) {
                this.instance = new UserRepository();
            }

            return this.instance;
    }

    public getUsers() {
        return UserModel.find({});
      }

    public getUser(id: ObjectId){
        return UserModel.findById(id);
    }

}