import { UsersRouter } from './users/users.routes.mjs';
// import { ParksRouter } from './park/park.routes.mjs';
// import { DogsRouter } from './dogs/dogs.routes.mjs';
import {Router} from 'express';

export const AppRouter = Router();

AppRouter.use('/users', UsersRouter);
// AppRouter.use('/park', ParksRouter);
// AppRouter.use('/dogs', DogsRouter);