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
        console.log('\n\nURL REPOSITORY - Increase View ERROR\n\n' + error);
        return '500';
    }

}

async function deleteUrls(id) {

    try {
        await connection.query(`
        DELETE FROM urls
            WHERE id = $1
        `,[id]
        );
        
        return true;
        
    } catch (error) {
        console.log('\n\nURLS REPOSITORY - DELETE URLS ERROR\n\n' + error);
        return '500';
    }

}

async function rankingUrl() {

    try {
        const { rows } = await connection.query(`
        SELECT users.id, users.name, COUNT(urls.url) AS "linksCount", SUM(urls."visitCount") AS "visitCount"
            FROM users
            LEFT JOIN urls 
                ON urls."userId" = users.id
            GROUP BY users.id
            ORDER BY "visitCount"
            LIMIT 10
        `
        );
        
        return rows;
        
    } catch (error) {
        console.log('\n\nURL REPOSITORY - Ranking URLS ERROR\n\n' + error);
        return '500';
    }

}


export { findShortenUrl, saveShortenUrl, findUrlId, increaseView, deleteUrls, rankingUrl }