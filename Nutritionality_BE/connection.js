import mysql from 'mysql';
import "dotenv/config";


const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
});

connection.connect((err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log('connected')
    }
});

const usersTableQuery = "CREATE TABLE if not exists users (id int NOT NULL AUTO_INCREMENT, email varchar(100) NOT NULL, fname varchar(45) NOT NULL, lname varchar(45) NOT NULL, password varchar(150) NOT NULL, picture varchar(2083) NOT NULL, PRIMARY KEY (id), UNIQUE KEY email_UNIQUE (email)) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;";


connection.query(usersTableQuery, (err, result) => {
    if (err){
     
        return;
    }
    else{
        return;
    }
});


export default connection;