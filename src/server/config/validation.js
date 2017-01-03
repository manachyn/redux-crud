import Joi from 'joi';

export default {
    createUser: {
        body: {
            username: Joi.string().required(),
            mobileNumber: Joi.string().regex(/^[1-9][0-9]{9}$/).required()
        }
    },
    updateUser: {
        body: {
            username: Joi.string().required(),
            mobileNumber: Joi.string().regex(/^[1-9][0-9]{9}$/).required()
        },
        params: {
            userId: Joi.string().hex().required()
        }
    },
    login: {
        body: {
            username: Joi.string().required(),
            password: Joi.string().required()
        }
    }
};

