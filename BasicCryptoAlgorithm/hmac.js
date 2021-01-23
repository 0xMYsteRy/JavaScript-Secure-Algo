const crypto = require('crypto');

const hmac = crypto.createHmac('sha256','secret-key');

hmac.update("Hello Mystery")

var r = hmac.digest('hex');

// Print out
console.log('hmac: '+r)

console.log(`hmac: ${r}`)
