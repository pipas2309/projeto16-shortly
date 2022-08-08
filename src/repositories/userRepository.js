import connection from "../db/postgresStrategy.js"

async function findUser(email) {

    try {
        const { rows: user } = await connection.query(`
        SELECT * FROM users
            WHERE email = $1
        `,[email]
        );
        
        if(user[0]) {
            return user[0];
        } 

        return false;
        
    } catch (error) {
        console.log('\n\nUSER REPOSITORY ERROR\n\n' + error);
        return '500';
    }

}

async function createUser(name, email, password) {

    try {
        const creatingNewUser = await connection.query(`
        INSERT INTO users (name, email, password) 
	        VALUES ($1, $2, $3)
        `,[name, email, password]
        );
        
        return true;
        
    } catch (error) {
        console.log('\n\nUSER REPOSITORY ERROR\n\n' + error);
        return '500';
    }

}

async function findUserById(id) { //meio inutil

    try {
        const { rows: user } = await connection.query(`
        SELECT * FROM users
            WHERE id = $1
        `,[id]
        );
        
        if(user[0]) {
            delete user[0].password;
            return user[0];
        } 

        return false;
        
    } catch (error) {
        console.log('\n\nUSER REPOSITORY - Find User By ID ERROR\n\n' + error);
        return '500';
    }

}

async function findUserUrls(userId) {

    try {
        const { rows: user } = await connection.query(`
        SELECT urls.id AS id FROM urls
            JOIN users
                ON users.id = urls."userId"
            WHERE urls."userId" = $1
        `,[userId]
        );
        
        return user;
        
    } catch (error) {
        console.log('\n\nUSER REPOSITORY - Find User URLS ERROR\n\n' + error);
        return '500';
    }

}

export { findUser, createUser, findUserById, findUserUrls }