import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { createUser, findUser } from '../repositories/userRepository.js';
import 'dotenv/config';


async function signInController(req, res) {
    const secretKey = process.env.JWT_SECRET;
    const { email, password } = res.locals.inputData;

    try {
        const userDB = await findUser(email);

        if(userDB === '500') {
            return res.sendStatus(500);
        }

        if(!userDB) {
            return res.status(401).send('Invalid email or password');
        }

        const checkPassword = bcrypt.compareSync(password, userDB.password);

        if(checkPassword && userDB) {
            const token = jwt.sign({id: userDB.id}, secretKey, { expiresIn: '30d' });
            return res.status(200).send({token})
        }

        return res.status(401).send('Invalid email or password');  

    } catch (error) {
        console.log('\n\nSIGN IN CONTROLLER ERROR\n\n' + error);
        res.sendStatus(500);
        return;
    }
 
}


async function signUpController(req, res) {
    const { name, email, password } = res.locals.inputData;

    const encryptedPassword = bcrypt.hashSync(password, 10);

    try {
        const created = await createUser(name, email, encryptedPassword);

        if(created === '500') {
            return res.sendStatus(409);
        }

        return res.status(201).send('TOPSON');  

    } catch (error) {
        console.log('\n\nSIGN IN CONTROLLER ERROR\n\n' + error);
        res.sendStatus(500);
        return;
    }
 
}

export { signInController, signUpController }