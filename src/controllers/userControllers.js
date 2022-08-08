import 'dotenv/config';

import { getAllUserUrls, findUserById } from '../repositories/userRepository.js';

async function allUserUrls(req, res) {
    const userId = res.locals.userId;
    
    try {
        const checkUser = await findUserById(userId);
        if(!checkUser) {
            res.sendStatus(404);
            return;
        }

        console.log(checkUser)
        console.log(userId)
        const allUrls = await getAllUserUrls(userId);

        return res.status(200).send(allUrls); 

    } catch (error) {
        console.log('\n\nURL CONTROLLER - All User URL ERROR\n\n' + error);
        res.sendStatus(500);
        return;
    }
 
}

export default allUserUrls;