const
    fs = require('fs'),
    crypto = require('crypto');

function loadKey(file) {
    return fs.readFileSync(file,'utf8');
}

let
    prv_key = loadKey('./rsa-prv.pem'),
    pub_key = loadKey('./rsa-pub.pem'),
    message = "MYSTERY LAND";

// Use private key to encrypt, use public key to decrypt
let enc_by_prv = crypto.privateEncrypt(prv_key, Buffer.from(message, 'utf8'))
let dec_by_pub = crypto.publicDecrypt(pub_key, enc_by_prv)

// Print out the results
console.log(enc_by_prv.toString('hex'));
console.log(dec_by_pub.toString('utf8'));

// Use public key to decrypt, use private key to encrypt
let enc_by_pub = crypto.publicEncrypt(prv_key, Buffer.from(message, 'utf8'));
let dec_by_prv = crypto.privateDecrypt(prv_key, enc_by_pub);

// Print out the results
console.log(enc_by_pub.toString('hex'))
console.log(dec_by_prv.toString('utf8'))