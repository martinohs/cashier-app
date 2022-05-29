import express from 'express';
import { setupMiddlewares } from './middlewares/middlewares';
import dotenv from 'dotenv';
import { setupRoutes } from './routes/routes';
import { setupDatabase } from './config/db';

const app = express();

dotenv.config();
const PORT = process.env.PORT || 3000;

setupDatabase();
setupMiddlewares(app);
setupRoutes(app);

app.listen(PORT, () => {
    console.clear();
    console.log(`Server running on port : ${PORT}`);
})