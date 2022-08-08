import { rankingUrl } from '../repositories/urlsRepository.js';
import { getAllUserUrls, findUserById } from '../repositories/userRepository.js';

async function ranking(req, res) {
    
    try {
        const topRankingsUrl = await rankingUrl();

        return res.status(200).send(topRankingsUrl); 

    } catch (error) {
        console.log('\n\nRANK CONTROLLER - Ranking ERROR\n\n' + error);
        res.sendStatus(500);
        return;
    }
 
}

export default ranking;