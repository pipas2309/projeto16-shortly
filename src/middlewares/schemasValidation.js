import urlSchema from "../schemas/urls.js";
import { signinSchema, signupSchema } from "../schemas/users.js";

function validator(whichSchema) {
    
    return (req, res, next) => {
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
            return res.status(422).send(validate.error.details);
        }

        next();
    }
}

export default validator;