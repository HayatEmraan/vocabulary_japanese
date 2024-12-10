import { validate } from '@app/middlewares/validation';
import { Router } from 'express';
import { userController } from './user.controller';
import {
  userLoginValidate,
  userUpdateValidate,
  userValidate,
} from './user.validation';
import { auth } from '@app/middlewares/auth';
import { userRole } from './user.constant';

const userRoutes = Router();

userRoutes.post(
  '/create-user',
  validate(userValidate),
  userController.createUser
);

userRoutes.post(
  '/login',
  validate(userLoginValidate),
  userController.loginUser
);

userRoutes.get(
  '/me',
  auth(userRole.admin, userRole.user),
  userController.getMe
);

userRoutes.patch(
  '/update-user/:id',
  auth(userRole.admin),
  validate(userUpdateValidate),
  userController.updateUser
);

userRoutes.get('/all-users', auth(userRole.admin), userController.getAllUsers);

export default userRoutes;
