const crypto = require('crypto');

const mystery = crypto.createDiffieHellman(512);
const mystery_key = mystery.generateKeys();

const prime = mystery.getPrime();
const generator = mystery.getGenerator();

console.log('Prime: ' + prime.toString('hex'));
console.log('Generator: ' + generator.toString('hex'));

const mysteryland = crypto.createDiffieHellman(512);
const mysteryland_key = mysteryland.generateKeys();

// Exchange the keys
var mysterySecret = mystery.computeSecret(mysteryland_key);
var mysterylandSecret = mysteryland.computeSecret(mystery_key);

// Print the secrets to the console.
console.log("Mystery secret: " + mysterySecret.toString('hex'));
console.log("Mysteryland secret: " + mysterylandSecret.toString('hex'));
