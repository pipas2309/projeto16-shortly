import joi from 'joi';

const signupSchema = joi.object({
    name: joi.string().min(3).max(128).required(),
    email: joi.string().email().required(),
    password: joi.string().min(1).max(64).required(),
    confirmPassword: joi.any().valid(joi.ref('password')).required()
});

const signinSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(1).max(64).required()
});

export default { signinSchema, signupSchema } = userSchemas;