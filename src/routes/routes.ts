import { Application } from 'express';
import { brandRouter } from '../brand/controller/brand.controller';
import { userRouter } from '../user/controller/user.controller';

export const setupRoutes = (app:Application) => {
    //* ejemplo
    //*    app.use('/pathPrincipal, funcion del controller)
    
    //Testear que este up, despues borrar
    app.get('/ping', (_req, res) => {
        console.log('someone pinged here!!')
        res.send('pong')
    });

    app.use('/users', userRouter);
    app.use('/brands',brandRouter);
}