import express from 'express';
import validate from 'express-validation';
import validation from '../config/validation';
import user from '../controllers/user';

const router = express.Router();

router.route('/')
    .get(user.list)
    .post(validate(validation.createUser), user.create);

router.route('/:userId')
    .get(user.get)
    .put(validate(validation.updateUser), user.update)
    .delete(user.remove);

router.param('userId', user.load);

export default router;

