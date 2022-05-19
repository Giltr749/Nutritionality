import db from '../connection.js'
import bcrypt from 'bcrypt';
import { v2 as cloudinary } from 'cloudinary';


const connection = db;

const getUserById = async (req, res) => {
    const sqlQuery = `SELECT *
    FROM users
    WHERE id = '${req.user.id}';`
    

    connection.query(sqlQuery, (err, result) => {
        if (err){
         
            res.status(400).send(err);
            return;
        }
        else{
            
            delete result[0].password;
            res.status(200).send(result[0]);
            return;
        }
    });
}

const updateUser = async (req, res) => {
    //allowes the user to change their settings while logged in
    //validate input
    //ensure mail isn't in use

    /*fields:
    password
    email
    firstname
    lastname
    phone number
    bio
    */
    const uploadResult = req.file && await cloudinary.uploader.upload(req.file.path);

    let hashedPassword;

    if(req.body.password){
        
        hashedPassword = await bcrypt.hash(req.body.password , 10);

    }

    let query = `UPDATE users SET `;

    hashedPassword && (query += `password = '${hashedPassword}', `);
    req.body.email && (query += `email = '${req.body.email}', `);
    req.body.fname && (query += `fname = '${req.body.fname}', `);
    req.body.lname && (query += `lname = '${req.body.lname}', `);
    uploadResult && (query += `picture = '${uploadResult.secure_url}',`);

    
    query = query.slice(0, -2);
    query += ` WHERE id = ${req.user.id};`;

    
    connection.query(query, (err, result) => {
        if (err){
            
            res.status(400).send(err);
            return;
        }
        else{
            
           res.send(result)

            return;
        }
    });
}

const getallUsers = async (req, res) => {

    const sqlQuery = `SELECT *
    FROM users;`
    

    connection.query(sqlQuery, (err, result) => {
        if (err){
         
            res.status(400).send(err);
            return;
        }
        else{
            
            for(let i = 0; i < result.length; i++){
                delete result[i].password;
            }
            res.status(200).send(result);
            return;
        }
    });
}



export default { getUserById, updateUser, getallUsers };
