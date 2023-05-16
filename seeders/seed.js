const crypto = require("crypto");

const generateHash = () => {
  return crypto.randomBytes(32).toString("hex");
};

console.log(generateHas);
