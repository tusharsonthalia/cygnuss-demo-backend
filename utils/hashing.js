/** This file provides the hashing functionality. Uses the SHA-256 
    algorithm to encrypt the string and returns a 64 characters long
    string.  */

/** importing the encryption library */
const crypto = require('crypto');

function hashString(string) {
    /** 
 This function hashes a string using the SHA-256 algorithm. 
    It can only hash a single string value. For hashing multiple 
    lines/file check other methods.
    
    Parameter:
    
    string: A String input which needs to be hashed.
    
    Output:
    
    string: A hashed string represented in hexadecimal format
    of fixed length of 64 characters.
    
    */
    if (typeof string !== 'string') {
        throw new TypeError(`Expected 'string' object but received '${typeof string}' object.`)
    }
    return crypto.createHash('sha256').update(string).digest('hex');
}

module.exports = hashString;