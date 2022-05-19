import bcrypt from 'bcrypt';
import db from '../connection.js'
import jwt from 'jsonwebtoken';
import { v2 as cloudinary } from 'cloudinary';


const connection = db;

const signup = async (req, res) =>{
    
    const uploadResult = req.file && await cloudinary.uploader.upload(req.file.path);

    try{

        const getUserQuery = `SELECT * FROM users WHERE 'email' = '${req.body.email}';`;
        connection.query(getUserQuery, (err, result) => {
            if(Object.keys(result).length !== 0) {
                res.status(400).send('This email address is already being used.');
                return;
            }
        });

        if(req.body.password !== req.body.checkPassword){
            res.status(400).send("Passwords don't match.");
            return;
        }

        
        const hashedPassword = await bcrypt.hash(req.body.password , 10);
        
        const sqlInsert = `INSERT INTO users (email, fname, lname, password, picture) VALUES ('${req.body.email}', '${req.body.fname}', '${req.body.lname}', '${hashedPassword}', '${uploadResult ? uploadResult.secure_url : null}' );`;

        connection.query(sqlInsert, (err, result) => {
            if (err){
                if(err.sqlMessage === `Duplicate entry '${req.body.email}' for key 'users.email_UNIQUE'`){
                    res.status(400).send('This email address is already being used.');
                    return;
                }
                

                res.status(400).send(err);
                return;
            }
            else{
                const getUserQuery = `SELECT *
                FROM users
                WHERE email = '${req.body.email}';`
    

                connection.query(getUserQuery, (err, result) => {
                    if (err){
                    
                        res.status(400).send(err);
                        return;
                    }
                    else{
                        
                        const user = {
                            id: result[0].id,
                            email: result[0].email,
                            fname: result[0].fname,
                            lname: result[0].lname,
                            phone: result[0].phone,
                        }
                        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
                        res.json({ accessToken: accessToken });
                        // res.send(result[0]);
                        return;
                    }
                });
                // res.status(201).send(result);
            }
        });
        
    }
    
    catch(err){
        res.send(err)
    }

}


const getUserById = async (req, res) => {
    const getUserQuery = `SELECT *
    FROM users
    WHERE email = '${req.body.email}';`
    

    connection.query(getUserQuery, (err, result) => {
        if (err){
         
            res.status(400).send(err);
            return;
        }
        else{
            
            const user = {
                id: result[0].id,
                email: result[0].email,
                fname: result[0].fname,
                lname: result[0].lname,
                phone: result[0].phone,
            }
            const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
            res.json({ accessToken: accessToken });
            // res.send(result[0]);
            return;
        }
    });
}

export default { signup };