import mysql from 'mysql';
import "dotenv/config";


const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE_NAME
});

connection.connect((err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log('connected')
    }
});



export default connection;