/** importing the router package */
const router = require('express').Router();
/** importing the hashing module */
const hashString = require('../utils/hashing');
/** importing the database conection */
const connection = require('../config/database');

/** configuring the API endpoints for verifying user login  */
router.route('/validate').get((req, res) => {
    res.status(200)
    res.send('Hello World')
})

router.route('/validate').post((req, res) => {
    // storing the username and password received from the front end
    const username = String(req.body.username);
    let password = String(req.body.password);
    // hashing the password
    password = hashString(password);
    // creating a response template
    let response = {
        'success': 0,
        'data': null
    } 
    
    // querying the database for the user based on the received username and password
    connection.query('SELECT * from users WHERE username = ? AND password = ?', [username, password], (err, results) => {
        if (err) throw err;

        // sending a user not found message if the user is not found
        else if (results.length != 1) {
            res.status(404)
            res.send(response)

        // querying the account details for the user
        } else {
            const userId = results[0].userId // obtaining the userId for the user to query their account details
            connection.query('SELECT * from account_data WHERE userId = ?', [userId], (err, results) => {
                if (err) throw err;
                
                // sending the user account details to the front end
                res.status(200)
                response.success = 1
                response.data = results
                res.send(response)
            })
        }
    })
})

/** exporting the login router */
module.exports = router;