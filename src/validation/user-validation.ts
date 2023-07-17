import Joi from 'joi';


const registerUserValidation = Joi.object({
    usermane: Joi.string().min(6).max(100).required(),
    password: Joi.string().min(2).max(100).required()
});

export {
    registerUserValidation
}