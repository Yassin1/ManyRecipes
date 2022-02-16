const jwt = require("jsonwebtoken");


verify = function (token) {
    try {
        const payload = jwt.verify(token, "SECRET");
        return payload;
    }
    catch (err) {
        return false;
    }
}

sign = function (data) {
    return jwt.sign(data, "SECRET");
}

const payload = verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjQ1MDUyMDYxfQ.Y1qDmLljlZkJDUGkmHlCmcBxqDLWXtpOPNcwKChAX9Q")
console.log(payload)