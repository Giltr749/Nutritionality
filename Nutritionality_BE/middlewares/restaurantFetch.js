import axios from 'axios';

const client = axios.create({
    baseURL: process.env.RES_DB ,
//   withCredentials: true,

});



const fetchRes = async (reqObj) => {

    const input = {
        "protein": 35,
        "sodium": 400
    }
    
    const restaurants = {
        "0": "tacobell",
        "1": "mc",
        "2": "tacobell",
        "3": "wendys",
        "4": "applebees",
        "5": "mc",
        "6": "tacobell",
        "7": "wendys",
        "8": "applebees",
        "9": "mc"
    }

    const obj = {
        "input": {
            "protein": 35,
            "sodium": 400
        },
        "restaurants": {
            "0": "tacobell",
            "1": "mc",
            "2": "tacobell",
            "3": "wendys",
            "4": "applebees",
            "5": "mc",
            "6": "tacobell",
            "7": "wendys",
            "8": "applebees",
            "9": "mc"
        }
    }
    // const reqObj = {};
    // reqObj.input = inputs;
    // reqObj.restaurants = restaurants;
    // console.log(reqObj);
    const response = await client.post('http://ec2-18-195-21-247.eu-central-1.compute.amazonaws.com:8080/predict', reqObj);
    

    // console.log(reqObj);
    return;
    // return response.data;

}




export { fetchRes }