import * as crypto from "crypto";


function generateRandomId(length) {
    const bytes = crypto.randomBytes(length);
    return bytes.toString('hex');
}

const randomId = generateRandomId(8);
console.log(randomId);