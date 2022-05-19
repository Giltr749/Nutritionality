import { fetchRes } from '../middlewares/restaurantFetch.js';
import db from '../DS_connection.js'

const connection = db;

const getRes = async (req, res) => {
    
    // const body = {};
    // body.input = req.body.input;
    // body.restaurants = req.body.restaurants;
    // // const requestJson = JSON.parse(req.body);
    // console.log(req.body);

    // const response = await fetchRes(body);
    // // res.send(requestJson)
    const sqlQuery = `SHOW TABLES;`
    

    connection.query(sqlQuery, (err, result) => {
        if (err){
         
            res.status(400).send(err);
            return;
        }
        else{
            
            res.status(200).send(result);
            return;
        }
    });
    // res.send('hi');
}



export default { getRes }