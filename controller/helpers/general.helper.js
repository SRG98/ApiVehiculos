const CryptoJS = require("crypto-js");
const config = require ("config");


exports.EncrypPassword = (password)=>{
    let secretkey = config.get("secretkeys").cryptojs;
    let encryptedPassword = CryptoJS.AES.encrypt(password, secretkey).toString();
    
    return encryptedPassword;
}