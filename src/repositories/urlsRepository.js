import connection from "../db/postgresStrategy.js"

async function findShortenUrl(shortenUrl) {

    try {
        const { rows: url } = await connection.query(`
        SELECT * FROM urls
            WHERE "shortUrl" = $1
        `,[shortenUrl]
        );
        
        if(url[0]) {
            return url[0];
        } 

        return false;
        
    } catch (error) {
        console.log('\n\nURL REPOSITORY - Find Shorten URL ERROR\n\n' + error);
        return '500';
    }

}

async function saveShortenUrl(userId, url, shortUrl) {

    try {
        await connection.query(`
        INSERT INTO urls ("userId", url, "shortUrl") 
            VALUES ($1, $2, $3)
        `,[userId, url, shortUrl]
        );
        
        return true;
        
    } catch (error) {
        console.log('\n\nURL REPOSITORY - Save Shorten URL ERROR\n\n' + error);
        return '500';
    }

}

async function findUrlId(id) {

    try {
        const { rows: url } = await connection.query(`
        SELECT id, "shortUrl", url FROM urls
            WHERE "id" = $1
        `,[id]
        );
        
        if(url[0]) {
            return url[0];
        } 

        return false;
        
    } catch (error) {
        console.log('\n\nURL REPOSITORY - Find URL ID ERROR\n\n' + error);
        return '500';
    }

}

async function increaseView(shortUrl) {

    try {
        const { rows: url } = await connection.query(`
        UPDATE urls 
            SET "visitCount" = "visitCount" + 1
        WHERE "shortUrl" = $1
        `,[shortUrl]
        );
        
        if(url[0]) {
            return url[0];
        } 

        return false;
        
    } catch (error) {
        console.log('\n\nURL REPOSITORY - Find URL ID ERROR\n\n' + error);
        return '500';
    }

}

export { findShortenUrl, saveShortenUrl, findUrlId, increaseView }