import { ObjectId } from "bson";
import { json } from "stream/consumers";
import { User } from "../dtos/user.interface";
import { IdNotFoundException } from "../exceptions/idNotFound.exception";

import { UserRepository } from "../repository/user.repository";

export class UserService {

    private static instance: UserService
    private userRepository = UserRepository.getInstance();

    private constructor() {}
    
    private ifUserNotFound = (user: any, id?: ObjectId) => {
        if (!user){
            console.log('User was not found');
            throw new IdNotFoundException(`id ${id} was not found in DB`);
        }
    }

    public static getInstance(): UserService{
        if (!this.instance){
            this.instance = new UserService();
        }
        return this.instance;
    }

    public getUsers() {
        return this.userRepository.getUsers();
    }

    public async getUser(id: ObjectId){
        const user = await this.userRepository.getUser(id);
        
        this.ifUserNotFound(user,id);

        return user;
    }

    public async addUser(user:User) {

        const newUser = await this.userRepository.addUser(user);
        if (!user) {
            console.log('Error cant create new user');
        }

        return newUser;
    }

    public async disableUser(id: ObjectId){
        const user = await this.userRepository.disableUser(id);
       
        this.ifUserNotFound(user,id);
        
        return user;
    }

    public async enableUser(id: ObjectId){
        const user = await this.userRepository.enableUser(id);
        
        this.ifUserNotFound(user,id);
        
        return user;
    }










}
