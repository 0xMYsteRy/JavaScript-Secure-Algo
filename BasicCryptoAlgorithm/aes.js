const crypto = require('crypto')

// crypto.createDecipher() should be avoided as they use a weak key derivation
// function (MD5 with no salt) and static initialization vectors

function aesEncrypt(data, key) {
    const cipher = crypto.createCipher('aes192', key);
    var crypted = cipher.update(data, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}

function aesDecrypt(data, key) {
    const decipher = crypto.createDecipher('aes192', key);
    var decrypted = decipher.update(encrypted,'hex','utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

const data = "WELCOME TO MYSTERY LAND";
const key = "SECRET MESSAGE";
var encrypted = aesEncrypt(data, key);
var decrypted = aesDecrypt(encrypted, key);

// Print outputs to the console
console.log("Plaintext: " + data);
console.log("Encrypted message: "+ encrypted );
console.log("Decrypted message: "+ decrypted );

