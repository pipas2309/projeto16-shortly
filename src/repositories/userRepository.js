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

export { findUser }