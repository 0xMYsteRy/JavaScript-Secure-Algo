// Call the API
const crypto = require('crypto')
var ReverseMd5 = require('reverse-md5')

const hash = crypto.createHash('md5');

hash.update("THE WORLD OF MYSTERY");
hash.update("Add more components to M's world!");

var r = hash.digest('hex');


// Java syntax style
console.log("MD5 hash: " + r);

// Php syntax style
console.log(`MD5 hash: ${r}`);

var rev = ReverseMd5({
    lettersUpper: false,
    lettersLower: true,
    numbers: true,
    special: false,
    whitespace: true,
    maxLen: 12
})

// MD5 decrypt
console.log(rev('0148e664f100a98bb07a52a53758a07e'));