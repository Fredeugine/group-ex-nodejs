import * as crypto from "crypto";

function RandomId(length) {
    const bytes = crypto.randomBytes(length);
    return bytes.toString('hex');
}

const Id = RandomId(8);
console.log(Id);
module.exports = RandomId

// importing it with require
// const RId = require('./crypto.js');
// RId()

