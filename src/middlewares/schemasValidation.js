import urlSchema from "../schemas/urls.js";
import { signinSchema, signupSchema } from "../schemas/users.js";

async function validator(whichSchema) {

    const data = res.locals.inputData;
    let validate;

    if(whichSchema === 'signIn') {
        validate = signinSchema.validate(data, { abortEarly: false });
    }

    if(whichSchema === 'signUp') {
        validate = signupSchema.validate(data, { abortEarly: false });
    }

    if(whichSchema === 'shorten') {
        validate = urlSchema.validate(data, { abortEarly: false });
    }

    if(validate.error) {
        return res.send(validate.error).status(422);
    }

    next();
}

export default validator;