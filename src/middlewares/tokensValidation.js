import jwt from 'jsonwebtoken';
import 'dotenv/config';

async function tokenValidator(req, res, next) {
    const { authorization } = req.headers;

    const inputToken = authorization?.replace("Bearer ", "");

    const secretKey = process.env.JWT_SECRET;

    try {
        const { id: userId } = jwt.verify(inputToken, secretKey)

        res.locals.userId = userId;

        next();

    } catch (error) {
        console.log('\n\nTOKEN VALIDATION ERROR\n\n' + error);
        res.sendStatus(401);
        return;
    }
}

export default tokenValidator;