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

export { findUser, createUser }