import 'dotenv/config';
import { customRandom, random, urlAlphabet } from 'nanoid';

import { deleteUrls, findShortenUrl, findUrlId, increaseView, saveShortenUrl } from '../repositories/urlsRepository.js';
import { findUserUrls } from '../repositories/userRepository.js';

async function createShortenUrl(req, res) {
    const userId = res.locals.userId;

    const { url } = res.locals.inputData;

    const nanoid = customRandom(urlAlphabet, 8, random);
    
    try {
        const shortUrl = nanoid();
        const check = await findShortenUrl(shortUrl);

        if(check === '500') {
            return res.sendStatus(500);
        }

        //Logic that guarantees that it will not create repeated short url
        if(check) {
            console.log('url repetida')
            return createShortenUrl(req, res);
        }

        const created = await saveShortenUrl(userId, url, shortUrl);

        if(created === '500') {
            return res.sendStatus(409);
        }

        return res.status(201).send({shortUrl}); 

    } catch (error) {
        console.log('\n\nURL CONTROLLER - Create Shorten URL ERROR\n\n' + error);
        res.sendStatus(500);
        return;
    }
 
}

async function getUrlById(req, res) {
    const { id } = req.params;

    try {
        const url = await findUrlId(id);

        if(!url) {
            res.sendStatus(404);
            return;
        }

        if(url === '500') {
            return res.sendStatus(400);
            
        }
    
        res.status(200).send(url);
    } catch (error) {
        console.log('\n\nURL CONTROLLER - Get URL By ID ERROR\n\n' + error);
        res.sendStatus(500);
        return;
    }

}

async function openShortUrl(req, res) {
    const { shortUrl } = req.params;

    try {
        const { url } = await findShortenUrl(shortUrl);

        if(!url) {
            res.sendStatus(404);
            return;
        }

        if(url === '500') {
            return res.sendStatus(400);
            
        }
        console.log(url)
        await increaseView(shortUrl);
        
        return res.redirect(url);
    } catch (error) {
        console.log('\n\nURL CONTROLLER - Get URL By ID ERROR\n\n' + error);
        res.sendStatus(500);
        return;
    }

}

async function deleteShortUrl(req, res) {
    const userId = res.locals.userId;

    const { id } =  req.params;

    const urlId = parseInt(id);

    if(isNaN(urlId)) {
        res.sendStatus(400);
        return; 
    }
    
    try {
        //Check if exist url
        const checkUrl = await findUrlId(urlId);

        if(!checkUrl) {
            res.sendStatus(404);
            return;
        }

        //Check if User-Token is the url owner
        const urls = await findUserUrls(userId);

        const iAmTheUrlOwner = await urls.find(el => el.id === urlId);

        if(iAmTheUrlOwner) {
            await deleteUrls(urlId);
            res.sendStatus(204);
            return; 
        }

        return res.sendStatus(401);

    } catch (error) {
        console.log('\n\nURL CONTROLLER - Delete URL ERROR\n\n' + error);
        res.sendStatus(500);
        return;
    }

}

export { createShortenUrl, getUrlById, openShortUrl, deleteShortUrl }