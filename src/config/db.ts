import { connect } from 'mongoose';

export const setupDatabase = async () => {

    console.log(`Connecting to database`);
    try {
        await connect(process.env.MONGODB_CNN!);
        console.log('Connection to DB successful');
    } catch (error) {
        console.log('Connection to DB failed');
        console.log(error);
    }
}