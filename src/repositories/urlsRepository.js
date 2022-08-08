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
        console.log('\n\nUSER REPOSITORY ERROR\n\n' + error);
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
        console.log('\n\nUSER REPOSITORY ERROR\n\n' + error);
        return '500';
    }

}


export { findShortenUrl, saveShortenUrl }