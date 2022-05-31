import { ObjectId } from "bson";
import { error } from "console";
import { json } from "stream/consumers";
import { User } from "../dtos/user.interface";
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
        console.log('Searching all users');
        return UserModel.find({});
      }

    public getUser(id: ObjectId){
        console.log(`Searching user with id ${id}`)
        return UserModel.findById(id);
    }

    public addUser(user: User){
        console.log('Creating user');
        return UserModel.create(user);
    }

    public disableUser (id: ObjectId) {
        console.log(`Disabling user with id ${id}`);
        const update = {active: false};

        return UserModel.findByIdAndUpdate(id,update,{
            returnOriginal: false
          });
    }

    public enableUser (id: ObjectId) {
        console.log(`Enabling user with id ${id}`);
        const update = {active: true};
        
        return UserModel.findByIdAndUpdate(id,update,{
            returnOriginal: false
          });
    }

}