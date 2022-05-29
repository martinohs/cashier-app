import { Application } from 'express';
import { userRouter } from '../user/controller/user.controller';

export const setupRoutes = (app:Application) => {
    
    //Testear que este up, despues borrar
    app.get('/ping', (_req, res) => {
        console.log('someone pinged here!!')
        res.send('pong')
    });

    app.use('/users', userRouter);
    //* ejemplo
    //*    app.use('/pathPrincipal, funcion del controller)
}