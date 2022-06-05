import { connect } from 'mongoose';

export const setupDatabase = async () => {

    const options = {
        dbName:process.env.MONGODB_DBNAME
    }

    console.log(`Connecting to database`);
    try {
        await connect(process.env.MONGODB_CNN!,options);
        console.log('Connection to DB successful');
    } catch (error) {
        console.log('Connection to DB failed');
        console.log(error);
    }
}