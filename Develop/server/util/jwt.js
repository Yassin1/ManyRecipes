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

module.exports = {
    verify,
    sign
}