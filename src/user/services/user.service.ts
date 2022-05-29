import { ObjectId } from "bson";

import { UserRepository } from "../repository/user.repository";

export class UserService {

    private static instance: UserService
    private userRepository = UserRepository.getInstance();

    private constructor() {}

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

        if (!user){
            console.log('User was not found');
        }

        return user;
    }










}
